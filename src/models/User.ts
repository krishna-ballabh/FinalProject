export interface User {
    user: {
        id: number,
        first_name: string;
        last_name: string;
        role: "staff" | "admin";

    }
}