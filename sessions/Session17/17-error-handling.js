function bootNavigation(mapLoaded) {
    try {
        console.log("Is map loaded : ", mapLoaded);
        if(!mapLoaded) {
            throw new Error("Map is not loaded");
        }
        return `Navigation is working...`;
    } catch (error) {
        console.log(`Error in bootNavigation: ${error.message}`);
    } finally {
        console.log("Navigation is working sequence completed...");
    }
}

const status1 = bootNavigation(true);
const status2 = bootNavigation(false);
console.log(`Result : ${status1}`)
console.log(`Result : ${status2}`)