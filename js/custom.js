document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
  
    keys.forEach(key => {
      key.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', key.id);
      });
  
      key.addEventListener('dragend', () => {});
  
      makeElementDraggable(key);
    });
  
    const keyboardContainer = document.getElementById('keyboard-container');
  
    keyboardContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  
    keyboardContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      handleDrop(e, keyboardContainer);
    });
  
    function makeElementDraggable(elmnt) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
      elmnt.onmousedown = dragMouseDown;
  
      function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
  
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
  
    function handleDrop(e, container) {
      const keyId = e.dataTransfer.getData('text/plain');
      const draggedKey = document.getElementById(keyId);
  
      const rect = container.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - draggedKey.clientWidth / 2;
      const offsetY = e.clientY - rect.top - draggedKey.clientHeight / 2;
  
      draggedKey.style.left = offsetX + 'px';
      draggedKey.style.top = offsetY + 'px';
    }
  });
  