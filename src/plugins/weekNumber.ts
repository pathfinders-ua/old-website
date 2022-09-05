export const getWeekNumber = (d: Date, q: number): number => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 1
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 1))
    // Get first day of year
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), q * 3, 1))
    // Calculate full weeks to nearest Thursday
    let weekNo = Math.ceil(((((d as any) - (yearStart as any)) / 86400000) + 1) / 7)
    // Check day num
    if (yearStart.getDay() !== 7) {
        weekNo++
    }
    // Return week number
    return weekNo;
}
