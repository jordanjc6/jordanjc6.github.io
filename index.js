function changeImage(index, project) {
    let images = document.getElementsByClassName("pic-" + project);  // note: project title must be unique for this to work
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
    }
    images[index].classList.remove("hidden");
    this.setActiveDot(index, project);
}

function setActiveDot(index, project) {
    let dots = document.getElementsByClassName("dots-" + project);  // note: project title must be unique for this to work
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("dot-active");
    }
    dots[index].classList.add("dot-active");
}
