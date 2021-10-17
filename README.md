# UKTV Coding Test (Star Wars)

### Setup the Nuxt project
```
npm install
```

### Run Nuxt locally
```
npm run dev
```

### View Demo on Netlify

If you're too busy to download and run this repo, then you can find my [Star Wars Nuxt project on Netlify](https://star-wars-uktv.netlify.app).

### My decision making

I've been learning basic TypeScript for the last few months, so I made the brave decision to attempt this coding test with TypeScript (rather than JavaScript). It mostly went fine, but annoyingly I spent too long debugging an Axios issue (in regards to the correct types being passed through via the API). So I had to begrudgingly use `:any` on a few occasions to silence the compiler.

I decided to use the Atomic Design principle because Nuxt already takes care of the pages and layouts, which means I only needed to deal with the atoms, molecules, and organisms for the components.

I always like to try and limit API calls whenever possible, so on this occasion each API call copies the data, so that it can be retrieved again during the same user session. This idea could have been extended upon with State Management and more advanced filter functions.

For CSS styling I decided to use TailWind, which is great for big projects, but in hindsight it was probably overkill for a small task like this.

I decided to allow users to make their search choices via two `<select>` inputs. The overall design is responsive, but for users on iPhone6/iPhoneSE/iPod it would probably have made more sense to lose the extra margin on the x-axis to provide a bit more room horizontally.

I always strive to be responsible when naming variables and functions (so that it's easier for others to read and understand) but with hindsight there's definitely a few of them that could do with renaming. I've also purposely not used semi colons at the end of lines (a personal preference) but for client work I always use the same style as their existing codebase.

I really hate leaving projects unfinished, so that leads me nicely to the tasks that got away...

### If I had more time

Below are bits and bobs that I would have tackled had there been more time...

* Provide better TypeScript types for the few `:any` declarations that crept in (mainly attributed to API output).
* I wanted to add some animation via `<transition-group>` for the search results.
* Would have been nice to create a useful filter sidebar (to allow users to further customise the search output).
* Allow users to switch between light/dark modes.
* It's just occurred to me how unsightly the sort function is, maybe `Lodash` would have been more readable.
* Rather than displaying all the data it would have been nice to offer some sort of pagination.
* I would have liked more time to clean-up the remaining ARIA roles that needed adding/tweaking.
* I installed the plugin `vue-scrollto` but sadly I ran out of time to implement it (as it would have been nice to scroll down to the search results for smartphone users).
* I also installed `dayjs` to help format the film dates, but again time was against me.
