export const currentDate = new Date().toLocaleDateString();
export const getWeekDay = (date) => {
    return new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
}
