/**
 * const { default: littleLemonAPI } = await import("./src/components/utilities/littleLemonAPI.js");
 * await littleLemonAPI(url="http://localhost:8000//api/menu-items", method="GET")
 * await littleLemonAPI(url="http://localhost:8000//api/menu-items/1", method="GET")
 */
const littleLemonAPI = async function(url, method, body=null, headers={"Accept":"*/*"}) {
    var result = await fetch(url, {method:method, body:body, headers:headers}).then((res) => {return res.json()});
    return result;
};

export default littleLemonAPI;