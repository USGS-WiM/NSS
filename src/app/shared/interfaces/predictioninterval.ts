export interface Predictioninterval {
    biasCorrectionFactor: number;
    student_T_Statistic: number;
    variance: number;
    xiRowVector?: string;
    XIRowVector?: string;
    covarianceMatrix: string;
    lowerBound: number;
    supperBound: number;
}
