class DataApi {
    
    constructor() {};

    getData(successCallback, errorCallback) {
        const request = new XMLHttpRequest();
        
        request.open('GET', 'base.json');
        request.onload = function(e) {
            const response = JSON.parse(this.responseText);
            
            if (response.code === 202) {
                if (successCallback) successCallback(response.response);
            } else {
                if (errorCallback) errorCallback(response.errors);
            }
        };
        request.send(null);
    };
};

export const dataApi = new DataApi();
