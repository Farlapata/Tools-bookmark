javascript:(function(){var b=document.createElement('button');b.innerHTML='Tools';b.style.position='fixed';b.style.bottom='20px';b.style.left='20px';b.style.fontWeight='bold';b.style.border='4px solid black';b.style.backgroundColor='white';b.style.color='black';b.style.fontSize='16px';b.style.padding='5px 10px';b.style.transition='background-color 0.2s ease';b.addEventListener('mouseover',function(){b.style.backgroundColor='gray';});b.addEventListener('mouseout',function(){b.style.backgroundColor='white';});var c=document.createElement('button');c.innerHTML='Text Editor';c.style.position='fixed';c.style.bottom='60px';c.style.left='20px';c.style.fontWeight='bold';c.style.border='4px solid black';c.style.backgroundColor='white';c.style.color='black';c.style.fontSize='16px';c.style.padding='5px 10px';c.style.transition='background-color 0.2s ease';c.addEventListener('mouseover',function(){c.style.backgroundColor='gray';});c.addEventListener('mouseout',function(){c.style.backgroundColor='white';});c.addEventListener('click',function(){document.designMode='on';});var d=document.createElement('button');d.innerHTML='Calculator';d.style.position='fixed';d.style.bottom='100px';d.style.left='20px';d.style.fontWeight='bold';d.style.border='4px solid black';d.style.backgroundColor='white';d.style.color='black';d.style.fontSize='16px';d.style.padding='5px 10px';d.style.transition='background-color 0.2s ease';d.addEventListener('mouseover',function(){d.style.backgroundColor='gray';});d.addEventListener('mouseout',function(){d.style.backgroundColor='white';});d.addEventListener('click',function(){var e=prompt('Enter an expression to evaluate:');if(e){var f=eval(e);alert('Result: '+f);}});var g=document.createElement('button');g.innerHTML='Hide';g.style.position='fixed';g.style.bottom='20px';g.style.left='105px';g.style.fontWeight='bold';g.style.border='4px solid black';g.style.backgroundColor='white';g.style.color='black';g.style.fontSize='16px';g.style.padding='5px 10px';g.style.transition='background-color 0.2s ease';g.addEventListener('mouseover',function(){g.style.backgroundColor='gray';});g.addEventListener('mouseout',function(){g.style.backgroundColor='white';});g.addEventListener('click',function(){b.style.display='none';c.style.display='none';d.style.display='none';g.style.display='none';});var h=!1;c.addEventListener('click',function(){h||(document.designMode='on',h=!0)}),b.addEventListener('click',function(){h?(c.style.display=%27none%27,d.style.display=%27none%27,g.style.display=%27block%27,document.designMode=%27off%27,h=!1):(c.style.display=%27block%27,d.style.display=%27block%27,g.style.display=%27block%27,h=!0)}),document.body.appendChild(b),document.body.appendChild(c),document.body.appendChild(d),document.body.appendChild(g),c.style.display=%27none%27,d.style.display=%27none%27,g.style.display=%27none%27;})();