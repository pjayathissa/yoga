function showContent() {
  console.log('showing content')



  for (var ii = 9; ii <35; ii++) {

    var posterBoard = document.getElementById('poster-board')

    var posterTemp = document.getElementById("poster-template");
    var clon = posterTemp.content.cloneNode(true);
    var image = clon.querySelector(".poster-image");
    image.src='book/png/flowchart' + ii + '.png';
    image.setAttribute( "onClick", "document.getElementById('flowchart-modal" + ii + "').style.display='block'" );
    posterBoard.appendChild(clon);


    var modalTemp = document.getElementById('modal-template')
    var modalClone = modalTemp.content.cloneNode(true);
    var modalImage = modalClone.querySelector('.modal-image')
    modalImage.src = 'book/png/flowchart' + ii + '.png';

    var modalDiv = modalClone.querySelector('.modal-div')
    modalDiv.id = "flowchart-modal" + ii

    posterBoard.appendChild(modalClone)
  }


}