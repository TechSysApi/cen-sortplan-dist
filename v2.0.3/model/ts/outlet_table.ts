import { OutletGroup } from './sort_plan'

export interface OutletTable {
    /**
     * The date+timstamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string

    /**
     * The name of the outlet table.
     * Format: [tablename.key.timestamp]+
     * Example: ZIELTAB.201446.20180222100409
     *
     * @maxLength 100
     */
    name: string

    /**
     * @minItems: 1
     */
    outletGroups: OutletGroup[]
}
