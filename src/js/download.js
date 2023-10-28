(()=>{
    const url = document.querySelector("video").src;
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const course = document.querySelector("h1.classroom-nav__title.clamp-1.t-16.t-bold.t-white").innerText.replace(/ /g, "_");
        const index = sessionStorage.getItem("index-"+course) || 1
        const title = document.querySelector("h2.classroom-nav__subtitle.clamp-1.t-16").innerText;
        const filename = `${index}.${title.replace(/ /g, "_")}.mp4`
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = filename
        a.click()
        sessionStorage.setItem("index-"+course, parseInt(index) + 1 )
      })
})()