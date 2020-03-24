/**
 * Sorting product describes "what the machine produces". This is typically the content of an Outlet. 
 * The sorting product can be are logistics destinations and special sorts
 */
export interface SortingProduct {
    /**
     * The name of the sorting product. 
     */
    name: string;

    /**
     * Special logistics and technical destinations. Typical examples are “REJECT” or “OVERFLOW”.
     */
    specialSorts?: SpecialSort[];
}

/**
 * Special logistics and technical destinations. Typical examples are “REJECT” or “OVERFLOW”.
 */
export interface SpecialSort {
    /**
     * The name of the special sort. 
     */
    name: SortReason;
}

/**
 * Groupings of physical outlets for each sequencing pass.
 */
export interface OutletGroup {
    /**
     * A unique key inside the sort plan to identify this occurrence of OutletGroup.
     * Bezeichnung für eine Gruppe der Endstellen. Dateninhalt ist das Virtuelle Ziel. Das virtuelle Ziel ist eine 3-stellige Zahl.
     * 
     * @type integer
     * @maxLength 3
     * 
     */
    name: number;

    /**
     * Tray number. Feld nur relevant, wenn mehrere Sorter eingesetzt werden. 
     * Nummer vom Sorter. Feld nur relevant, wenn mehrere Sorter eingesetzt werden. 
     * 
     * @type integer
     * @minimum 1
     * 
     */
    tray?: number;

    /**
     * Defines the usage made of the outlet group. 
     */
    specialType?: OutletArea;

    /**
     * The list of physical outlets to be used.
     * 
     * @minItems 1
     * @maxItems 6
     */
    outlets: Outlet[];
}

/**
 * Defines the outlet area. SEQ_AREA and SEQ_OV_AREA are not used for parcel sorting.
 * - UNKNOWN: Default enum value to map not supported values.
 * - STD_AREA: Area used for non-sequenced mail piece;
 * - SEQ_AREA: Area used for sequenced mail piece;
 * - REJECT_AREA: Area for SpecialSort: application specific (ZDS.SpecialVZ) or machine specific (ASL) destinations.
 * - SEQ_OV_AREA: Area for overflow stackers, typically used in the 1st pass when the mail volume is not yet precisely known. This area consists of all the remaining stackers.
 * - MCS_AREA: Area for manual coding systems
 */
export enum OutletArea {
    UNKNOWN,
    STD_AREA,
    SEQ_AREA,
    REJECT_AREA,
    SEQ_OV_AREA,
    MCS_AREA
}

/**
 * Defines the machine specific sort reasons.
 * List of values:
 * - UNKNOWN: Default enum value to map not supported values.
 * - OK: Discharge OK. This describes just a "regular" item
 * - MAX_RECIRCULATION: Item has reached the max allowed amount of recirculations.
 * - ITEM_NO_READ: Item has reached the max allowed amount of scans and the last attempt was a no read.
 * - ITEM_MULTIPLE_READ: Multiple national or international id barcodes could be identified. 
 * - SCANNER_TIMEOUT: Item has reached the max allowed amount of scans and the last attempt was a "no answer" from scanner. 
 * - ITEM_STRAY: Stray item detected. 
 * - ITEM_INDUCTION_ERROR: Induction error item detected (occupied twice, wrong tray). 
 * - ITEM_DISCHARGE_ERROR: Discharge faults. 
 * - ITEM_ERROR: Item has a Logical error. 
 * - ITEM_TRACKING_ERROR: item was inducted with tracking fault.
 * - ITEM_OCCUPIED_TWICE_ERROR: item was inducted on occupied tray.
 * - ITEM_DISAPPEARED: The parcel was lost at unknown location.
 * - OUTLET_NOT_AVAILABLE: No available chute could be found.
 * - OUTLET_UNKNOWN: Logical destination not defined.
 * - UNDEFINED_ERROR: Internal error happened.
 * - NO_CAPACITY: The destination outlet has no more capacity.
 * - DIMENSION_ERROR: Item oversize. The parcel was discharge, because of dimension exceed. 
 * - WEIGHT_ERROR: Item too heavy. The parcel was discharge, because of weight exceed.
 * - SORTPLAN_ERROR: Sortplan error. 
 * - DIRECT_SORTING_MODE: Item sorted by the direct sorting mode. 
 * - ITEM_NO_SORTCODE: No sortcode has been received for this item. 
 * - OUTLET_MISSED: Sortcode has been updated (push or repetitive requests), physical outlet already passed.
 */
export enum SortReason {
    UNKNOWN,
    OK,
    MAX_RECIRCULATION,
    ITEM_NO_READ,
    ITEM_MULTIPLE_READ,
    SCANNER_TIMEOUT,
    ITEM_STRAY,
    ITEM_INDUCTION_ERROR,
    ITEM_DISCHARGE_ERROR,
    ITEM_ERROR,
    ITEM_TRACKING_ERROR,
    ITEM_OCCUPIED_TWICE_ERROR,
    ITEM_DISAPPEARED,
    OUTLET_NOT_AVAILABLE,
    OUTLET_UNKNOWN,
    UNDEFINED_ERROR,
    NO_CAPACITY,
    DIMENSION_ERROR,
    WEIGHT_ERROR,
    SORTPLAN_ERROR,
    DIRECT_SORTING_MODE,
    ITEM_NO_SORTCODE,
    OUTLET_MISSED
}

/**
 * Physical outlet.
 */
export interface Outlet {
    /**
     * The name of the outlet.
     * 
     * @type integer
     * @maxLength 4
     */
    name: number;

    /**
     * Priority of the outlet. Defaults to 1=Highest Priority.
     * 
     * If multiple outlets have the same priority, round robin is applied. Lower priority outlets are only used
     * when higher priority outlets are full.
     * 
     * @type integer
     * @maxLength 2
     */
    priority?: number;
}

/**
 * Maps a product to an action.
 */
export interface Action {
    sortingProduct?: string;
    sorts?: Sort[];
    prints?: Print[];
}

/**
 * Sort/sequence this product to an OutletGroup. For dynamic outletGroups
 * specify the relative position withing Group
 */
export interface Sort {
    /**
     * A reference on the name of the outlet group. 
     * Das Virtuelle Ziel fasst eine Liste von Endstellen zu einem logischen Sortierziel, auch Endstellengruppe genannt, zusammen.
     * 
     * @type integer
     * @maxLength 3
     * 
     */
    outletGroup: number;

    /**
     * Die Endstellen-Position dient zum Positionieren der Anzeige auf dem Display der Endstelle und hat die Bedeutung des Rx-Stellplatzes an der Endstelle.
     * Die Endstellen-Position ist eine bis zu einstellige positive Zahl. Eine Endstellengruppe hat max. neun Positionen.
     * 
     * @type integer
     * @minimum 1
     * @maxLength 1
     */
    position?: number;
}

/**
 * Describes what shall be printed on a label or a display for mail
 * items that fall into a given Product.
 */
export interface Print {
    /**
     * Specifies the print Location i.e. where action is performed. Typical locations
     * are Label-Printer or Display.
     */
    location: LocationType;
    
    /**
     * Text zur Anzeige auf dem Display der Endstelle
     * Beispiele: Bezirk/Tour, Plz, Rx-Stellplatz, Zielzentrum
     * 
     * @maxLength 20
     */
    format: string;
}

/**
 * Defines the print location.     
 * - UNKNOWN: Default enum value to map not supported values. 
 * - LABEL_PRINTER: the label printer
 * - DISPLAY: the display
 */
export enum LocationType {
    UNKNOWN,
    LABEL_PRINTER, 
    DISPLAY
}