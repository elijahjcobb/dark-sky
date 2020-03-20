/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import {PdMethod, PdRequest, PdResponse} from "@element-ts/palladium";

export interface DarkSkyReport {
	latitude: number;
	longitude: number;
	timezone: string;
	currently: DarkSkyReportCurrently;
	minutely: DarkSkyReportMinutelyDataBlock;
	hourly: DarkSkyReportHourlyDataBlock;
	daily: DarkSkyReportDailyDataBlock;
	alerts: DarkSkyReportAlertDataBlock;
	flags: DarkSkyReportFlagsDataBlock;
	offset?: number;
}

export type DarkSkyReportCurrently = { currently: DarkSkyReportCurrentlyDataBlock } & DarkSkyBaseReport;
export type DarkSkyReportMinutely = { minutely: DarkSkyReportMinutelyDataBlock } & DarkSkyBaseReport;
export type DarkSkyReportHourly = { hourly: DarkSkyReportHourlyDataBlock } & DarkSkyBaseReport;
export type DarkSkyReportDaily= { daily: DarkSkyReportDailyDataBlock } & DarkSkyBaseReport;
export type DarkSkyReportAlerts = { alerts?: DarkSkyReportAlertDataBlock } & DarkSkyBaseReport;
export type DarkSkyReportFlags = { flags: DarkSkyReportFlagsDataBlock } & DarkSkyBaseReport;

export interface DarkSkyBaseReport {
	latitude: number;
	longitude: number;
	timezone: string;
	offset?: number;
}

export interface DarkSkyReportFlagsDataBlock {
	"darksky-unavailable"?: boolean;
	"nearest-station"?: number;
	sources: Array<string>;
	units: string;
}

export type DarkSkyReportAlertDataBlock = Array<DarkSkyReportAlertDataPoint>;
export interface DarkSkyReportAlertDataPoint {
	description: string;
	expires: number;
	regions: Array<string>;
	severity: "advisory" | "watch" | "warning";
	time: number;
	title: string;
	uri: string;
}

export type DarkSkyReportDailyDataBlock = DarkSkyReportBaseDataBlock<DarkSkyReportDailyDataPoint>;
export type DarkSkyReportDailyDataPoint = Pick<
	DarkSkyReportBaseDataPoint,
	"apparentTemperatureHigh" |
	"apparentTemperatureHighTime" |
	"apparentTemperatureLow" |
	"apparentTemperatureLowTime" |
	"apparentTemperatureMax" |
	"apparentTemperatureMaxTime" |
	"apparentTemperatureMin" |
	"apparentTemperatureMinTime" |
	"cloudCover" |
	"dewPoint" |
	"humidity" |
	"icon" |
	"moonPhase" |
	"ozone" |
	"precipAccumulation" |
	"precipIntensity" |
	"precipIntensityError" |
	"precipIntensityMax" |
	"precipIntensityMaxTime" |
	"precipProbability" |
	"precipType" |
	"pressure" |
	"summary" |
	"sunriseTime" |
	"sunsetTime" |
	"temperatureHigh" |
	"temperatureHighTime" |
	"temperatureLow" |
	"temperatureLowTime" |
	"temperatureMax" |
	"temperatureMaxTime" |
	"temperatureMin" |
	"temperatureMinTime" |
	"time" |
	"uvIndex" |
	"uvIndexTime" |
	"visibility" |
	"windBearing" |
	"windGust" |
	"windGustTime" |
	"windSpeed"
>;

export type DarkSkyReportHourlyDataBlock = DarkSkyReportBaseDataBlock<DarkSkyReportHourlyDataPoint>;
export type DarkSkyReportHourlyDataPoint = Pick<
	DarkSkyReportBaseDataPoint,
	"apparentTemperature" |
	"cloudCover" |
	"dewPoint" |
	"humidity" |
	"icon" |
	"ozone" |
	"precipAccumulation" |
	"precipIntensity" |
	"precipIntensityError" |
	"precipProbability" |
	"precipType" |
	"pressure" |
	"summary" |
	"temperature" |
	"time" |
	"uvIndex" |
	"visibility" |
	"windBearing" |
	"windGust" |
	"windSpeed"
>;

export type DarkSkyReportMinutelyDataBlock = DarkSkyReportBaseDataBlock<DarkSkyReportMinutelyDataPoint>;
export type DarkSkyReportMinutelyDataPoint = Pick<
	DarkSkyReportBaseDataPoint,
	"cloudCover" |
	"dewPoint" |
	"humidity" |
	"icon" |
	"ozone" |
	"precipIntensity" |
	"precipIntensityError" |
	"precipProbability" |
	"precipType" |
	"pressure" |
	"summary" |
	"time" |
	"uvIndex" |
	"visibility" |
	"windBearing" |
	"windGust" |
	"windSpeed"
>;

export type DarkSkyReportCurrentlyDataBlock = Pick<
	DarkSkyReportBaseDataPoint,
	"apparentTemperature" |
	"cloudCover" |
	"dewPoint" |
	"humidity" |
	"icon" |
	"nearestStormBearing" |
	"nearestStormDistance" |
	"ozone" |
	"precipAccumulation" |
	"precipIntensity" |
	"precipIntensityError" |
	"precipProbability" |
	"precipType" |
	"pressure" |
	"summary" |
	"temperature" |
	"time" |
	"uvIndex" |
	"visibility" |
	"windBearing" |
	"windGust" |
	"windSpeed"
	>;


export interface DarkSkyReportBaseDataPoint {
	apparentTemperature: number;
	apparentTemperatureHigh: number;
	apparentTemperatureHighTime: number;
	apparentTemperatureLow: number;
	apparentTemperatureLowTime: number;
	apparentTemperatureMax: number;
	apparentTemperatureMaxTime: number;
	apparentTemperatureMin: number;
	apparentTemperatureMinTime: number;
	cloudCover: number;
	dewPoint: number;
	humidity: number;
	icon: "clear-day" | "clear-night" | "rain" | "snow" | "sleet" | "wind" | "fog" | "cloudy" | "partly-cloudy-day" | "partly-cloudy-night" | "hail" | "thunderstorm" | "tornado";
	moonPhase: number;
	nearestStormBearing: number;
	nearestStormDistance: number;
	ozone: number;
	precipAccumulation: number;
	precipIntensity: number;
	precipIntensityError?: number;
	precipIntensityMax: number;
	precipIntensityMaxTime: number;
	precipProbability: number;
	precipType: "rain" | "snow" | "sleet";
	pressure: number;
	summary: string;
	sunriseTime: number;
	sunsetTime: number;
	temperature: number;
	temperatureHigh: number;
	temperatureHighTime: number;
	temperatureLow: number;
	temperatureLowTime: number;
	temperatureMax: number;
	temperatureMaxTime: number;
	temperatureMin: number;
	temperatureMinTime: number;
	time: number;
	uvIndex: number;
	uvIndexTime: number;
	visibility: number;
	windBearing: number;
	windGust: number;
	windGustTime: number;
	windSpeed: number;
}

interface DarkSkyReportBaseDataBlock<T> {
	data: Array<T>;
	summary: string;
	icon: string;
}

/**
 * The class you need to instantiate in order to access the API.
 */
export class DarkSky {

	private readonly latitude: number;
	private readonly longitude: number;
	private readonly secretKey: string;

	/**
	 * Create a new API instance.
	 * @param secretKey The secret key for your developer account.
	 * @param latitude The latitude you wish to get data for.
	 * @param longitude The longitude you with to get data for.
	 */
	public constructor(secretKey: string, latitude: number, longitude: number) {

		this.secretKey = secretKey;
		this.latitude = latitude;
		this.longitude = longitude;

	}

	/**
	 * Get all data for a category excluding certain blocks.
	 * @param blocksToExclude The blocks to exclude.
	 */
	private async getDataBlock<T>(blocksToExclude?: string[]): Promise<T> {

		const req: PdRequest = new PdRequest();

		let url: string = `https://api.darksky.net/forecast/${this.secretKey}/${this.latitude},${this.longitude}`;
		if (blocksToExclude) url = url + `?exclude=[${blocksToExclude?.join(",")}]`;

		req.setUrl(url);
		req.setMethod(PdMethod.Get);

		const res: PdResponse = await req.request();
		const json: object | undefined = res.getJSON();
		const code: number = res.statusCode;
		if (code !== 200) throw new Error("Bad request to dark sky. Received not a 200.");
		if (json === undefined) throw new Error("Received a malformed response.");

		return json as unknown as T;

	}

	/**
	 * Get the current weather data.
	 */
	public async getCurrently(): Promise<DarkSkyReportCurrently> { return this.getDataBlock(["minutely", "hourly", "daily", "alerts", "flags"]); }

	/**
	 * Get a minute by minute forecast of the weather.
	 */
	public async getMinutely(): Promise<DarkSkyReportMinutely> { return this.getDataBlock(["currently", "hourly", "daily", "alerts", "flags"]); }

	/**
	 * Get an hour by hour forecast of the weather.
	 */
	public async getHourly(): Promise<DarkSkyReportHourly> { return this.getDataBlock(["minutely", "currently", "daily", "alerts", "flags"]); }

	/**
	 * Get an day by day forecast of the weather.
	 */
	public async getDaily(): Promise<DarkSkyReportDaily> { return this.getDataBlock(["minutely", "hourly", "currently", "alerts", "flags"]); }

	/**
	 * Get all the alerts for your area.
	 */
	public async getAlerts(): Promise<DarkSkyReportAlerts> { return this.getDataBlock(["minutely", "hourly", "daily", "currently", "flags"]); }

	/**
	 * Get the flags used for any requests made.
	 */
	public async getFlags(): Promise<DarkSkyReportFlags> { return this.getDataBlock(["minutely", "hourly", "daily", "alerts", "currently"]); }

	/**
	 * Get the current weather, a forecast minutely, hourly, and daily, the alerts for you area, and the flags used.
	 */
	public async get(): Promise<DarkSkyReport> { return this.getDataBlock(); }

}