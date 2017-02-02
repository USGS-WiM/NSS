export interface IHydro {
    recurrence: string;
    lagTime: number;
    showExtraSettings: boolean;
    axis?:string;
    type_BX?:string;
    type_LY?:string;
    title_BX?:string;
    title_LY?:string;    

    majorTic_BX?:boolean;
    majorGrid_BX?:boolean;
    minorTic_BX?:boolean;
    minorGrid_BX?:boolean;

    majorTic_LY?:boolean;
    majorGrid_LY?:boolean;
    minorTic_LY?:boolean;
    minorGrid_LY?:boolean;
    colorPickerColor:string;
    curveLabel: string;
}