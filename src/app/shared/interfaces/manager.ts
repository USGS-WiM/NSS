export interface Manager{
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    otherInfo?: string;
    primaryPhone?: string;
    role?: string;
    secondaryPhone?: string;
    username: string;
    password?: string;
    isEditing?: boolean;
    regionManagers?: any;
}
