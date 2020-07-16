import { join as pathJoin } from "path";
import { getAllDependencies } from "./utils/getAllDependencies";
export { getDonationReminderProjects };
import assert = require("assert");

async function getDonationReminderProjects(): Promise<object[]> {
  const dependencies = await getAllDependencies();

  const donationReminderProjects = dependencies
    .map((dependency: string) => {
      const pkgJson = getPackageJson(dependency);
      if (!pkgJson?.lsos?.donationReminder) {
        return null;
      }
      const { projectName } = pkgJson.lsos;
      assert(projectName);
      const packageName = pkgJson.name;
      assert(packageName);
      const { text } = pkgJson.lsos.donationReminder;
      const { minNumberOfAuthors = 0 } = pkgJson.lsos.donationReminder;
      assert(minNumberOfAuthors >= 0);
      assert(text);
      return {
        packageName,
        projectName,
        text,
        minNumberOfAuthors,
      };
    })
    .filter(Boolean);

  return donationReminderProjects;
}

function getPackageJson(pathOrPkgName: string) {
  const packageJsonPath = pathJoin(pathOrPkgName, "package.json");
  try {
    return require(packageJsonPath);
  } catch (_) {
    return null;
  }
}
