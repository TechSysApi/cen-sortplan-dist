import { Action } from './sort_plan'
import { SortingProduct } from './sort_plan'

export interface SpecialSortTable {
    /**
     * The date+timstamp which identifies the point in time, where the information was generated, including milliseconds.
     *
     * @format date-time
     */
    timestamp: string

    /**
     * The name of the special sort table
     * Format: tablename.key.timestamp
     * Example: SPECIALVZ.201446.20180222100409
     * @maxLength 40
     */
    name: string

    /**
     * @minItems 1
     */
    sortingProducts: SortingProduct[]

    /**
     * @minItems 1
     */
    actions: Action[]
}
