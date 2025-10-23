/**
 * const { default: unpackMenuItems } = await import("./src/components/utilities//unpackMenuItems.js");
 * const menuItemGroups = await unpackMenuItems(data);
 */
const unpackMenuItems = function(menuItems) {
    // Create a Map
    const menuItemGroups = new Map();
    // Set Map Values
    menuItemGroups.set("starters", menuItems.filter(obj => {return obj.category_id === 1}));
    menuItemGroups.set("mains", menuItems.filter(obj => {return obj.category_id === 2}));
    menuItemGroups.set("desserts", menuItems.filter(obj => {return obj.category_id === 3}));
    menuItemGroups.set("drinks", menuItems.filter(obj => {return obj.category_id === 4}));
    return menuItemGroups
};

export default unpackMenuItems;