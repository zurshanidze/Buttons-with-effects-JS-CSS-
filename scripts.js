const buttons1 = document.querySelectorAll('a:nth-child(1)');
        const buttons2 = document.querySelectorAll('a:nth-child(2)');

        buttons1.forEach(btn => {
            console.log(btn)
            btn.addEventListener('mouseover', function(e){
                // console.log(e, e.target, e.target.offsetLeft)
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                let ripples = document.createElement('span');
                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';
                
                btn.appendChild(ripples)

                let timeoutId = setTimeout(()=>{
                    ripples.remove()
                    clearTimeout(timeoutId)
                }, 1000);
            })
            
        });

        
        buttons2.forEach(btn => {
            btn.addEventListener('mousedown', function(e){
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                let ripples = document.createElement('span');
                ripples.style.left = x + 'px';
                ripples.style.top = y + 'px';
                this.appendChild(ripples)

                let timeoutId = setTimeout(()=>{
                    ripples.remove()
                    clearTimeout(timeoutId)
                }, 1000);
            })
            
        });