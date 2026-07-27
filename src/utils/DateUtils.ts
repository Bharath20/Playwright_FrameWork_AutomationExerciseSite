export class DateUtils {

    // Get current date (YYYY-MM-DD)
    static getCurrentDate(): string {
        return new Date()
            .toISOString()
            .split("T")[0];
    }


    // Get current date and time
    static getCurrentDateTime(): string {
        return new Date()
            .toISOString()
            .replace("T", "_")
            .replace(/:/g, "-")
            .split(".")[0];
    }


    // Add days to current date
    static addDays(days: number): string {

        const date = new Date();
        date.setDate(date.getDate() + days);

        return date.toISOString().split("T")[0];
    }


    // Subtract days from current date
    static subtractDays(days: number): string {

        const date = new Date();
        date.setDate(date.getDate() - days);

        return date.toISOString().split("T")[0];
    }


    // Compare two dates
    static isDateEqual(date1: string, date2: string): boolean {

        return date1 === date2;

    }


    // Get timestamp for unique test data
    static getTimestamp(): string {

        return Date.now().toString();

    }


    // Format date
    static formatDate(date: Date): string {

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;

    }

}