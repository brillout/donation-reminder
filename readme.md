# Lsos Donation Reminder

The Lsos Donation Reminder enables you to kindly remind companies to donate.

<br/>

<p align="center">
  <img src="/donation-reminder.png" height="175"/>
</p>

<br/>

[Gettings Started](#getting-started)
<br/>
[Questions & Discussions](#questions--discussions)
<br/>
[FAQ](#faq)

<br/>
<br/>

## Getting Started

~~~js
// npm install `@lsos/donationReminder`:
import { printDonationReminder } from "@lsos/donation-reminder";

printDonationReminder({
  // Npm package name
  npmName: "my-open-source-project",

  // Human-readable project name
  projectName: "My Open Source Project",

  // Text that will be shown to users
  donationText: "Hi :smile:, I'm Alice, I'm looking for a gold sponsor, thanks! :heart:",

  // Show the donation-reminder only to users working on projects with >=5 authors
  minNumberOfAuthors: 5,
});
~~~

Your users can remove the donation-reminder by running `npx lsos remove`/`yarn lsos remove`.

When setting the option `minNumberOfAuthors` to `n`,
the donation-reminder is shown only to users working in a Git repository that has `n` or more Git authors.

You can use any emoji of the [Twemoji](https://github.com/twitter/twemoji) catalog.
(These are the emojis you see on Twitter and Discord.)
You can use [Discord](https://discord.com/) to find emoji codes
such as `:smile:` or `:heart:`.


## Questions & Discussions

For any questions about the donation-reminder
[open a ticket](https://github.com/Lsos/donation-reminder/issues/new)
here,
and
[open a ticket on github.com/Lsos/converse](https://github.com/Lsos/converse/issues/new)
for broad discussions about open source financing.
We enjoy talking about anything OSS :).


## FAQ

### [End-user] How do I make sure the donation-reminder is never shown in tests, statging and production?

Make sure that `window.process.env.NODE_ENV==='production'` (or `'stating'`/`'test'`).

Most frameworks (CRA, Gatsby, ...) do that for you already.

### [OSS-project] I don't see any donation-reminder, where is it?

The donation-reminder currently only works in Chromium-based browsers.
If you use Firefox, you won't see any donation-reminder.

### [OSS-project] Does it work only for browser-side open source projects?

Yes, the donation-reminder is only shown in the developer console of the browser.

### [OSS-project] Can I show the donation-reminder to all my users?

Yes, just set `minNumberOfAuthors: 0`.

Note that the significant donations usually come from companies.
It usually isn't worth it to show the donation-reminder to a user that works on a hobby single-author project &mdash;
you may want money from companies, not hobbyists.

### How does it work?

If you're curious about what exactly the `@lsos/donation-reminder` code does, check out the source code explainer at [/src/readme.md](/src/#readme).
