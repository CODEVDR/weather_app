let button = document.getElementById("button");
    button.onclick = () => {
        let l = document.getElementById("location").value
        // fectching Api From server
        let url = "https://goweather.herokuapp.com/weather/" + l.toLowerCase()
        let p = fetch(url)
        p.then((response) => {
            console.log()
            return [response.status, response.ok, response.json()]
        }).then((value) => {
            if (value[0] === 404 || value[1] === false) {
                alert("No Location Found Named : " + l)
            }
            else {
                // "Forecast : " + val["forecast"][0]+","+val["forecast"][1]+","+val["forecast"][2] +
                console.log("Fetching..")
                let p1 = value[2].then((val) => {
                    let appendtext = "Description : " + val["description"] + "<br>" + "Temperature : " + val["temperature"] + "<br>" + "Wind Speed : " + val["wind"]
                    document.getElementById("center").style.top = "30%"
                    document.getElementById("results").style.top = "50%"
                    document.getElementById("results").innerHTML += appendtext
                })
            }
        }).catch((value) => {
            console.error(value)
            alert("We Are Facing Server Issue..Please Try Again Later..")
        })
    }