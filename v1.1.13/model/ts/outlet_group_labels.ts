import { Action } from "./sort_plan";

export interface OutletGroupLabels {
    /**
     * The date+timstamp which identifies the point in time, where the information was generated, including milliseconds.
     * 
     * @format date-time
     */
    timestamp: string;

    /**
     * The name of the outlet group labels table
     * Format: [tablename.key.timestamp]+.scenario.time
     * Example: VZTAB.201325.20180709135826.SPECIALVZ.202119.20190306133531.3.2
     * @maxLength 100
     */
    name: string;

    /**
     * @minItems 1
     */
    actions: Action[];
}