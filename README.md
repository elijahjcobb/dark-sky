# dark-sky
A working TypeScript library for [darksky.net](https://darksky.net) providing all types and uses promises.

## Example
```typescript
const api: DarkSky = new DarkSky("api-key", 0, 0);

const currently: DarkSkyReportCurrently = await api.getCurrently();
const minutely: DarkSkyReportMinutely = await api.getMinutely();
const hourly: DarkSkyReportHourly = await api.getHourly();
const daily: DarkSkyReportDaily = await api.getDaily();
const alerts: DarkSkyReportAlerts = await api.getAlerts();
const flags: DarkSkyReportFlags = await api.getFlags();
const allCategories: DarkSkyReport = await api.get();
```

## Types
All types were last updated 3/20/2020 from the [DarkSky Docs](https://darksky.net/dev/docs).

## Documentation
Everything is completely documented. You can view the
[source code](https://github.com/elijahjcobb/***/tree/master/ts) on GitHub.

## Bugs
If you find any bugs please [create an issue on GitHub](https://github.com/elijahjcobb/***/issues) or if you are old
fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).