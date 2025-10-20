/**
 * const { default: littleLemonAPI } = await import("./src/components/utilities/littleLemonAPI.js");
 * await littleLemonAPI(url="http://localhost:8000//api/menu-items", method="GET")
 * await littleLemonAPI(url="http://localhost:8000//api/menu-items/1", method="GET")
 */
const littleLemonAPI = async function(url, method, body=null, headers={"Accept":"*/*"}) {
    const response = fetch(url, {method:method, body:body, headers:headers});
    const payload = (await response).json();
    return payload;
};

export default littleLemonAPI;