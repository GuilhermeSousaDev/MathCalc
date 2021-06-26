function seekDelta() {
    const Pf = document.getElementById('Pf').value
    const Pi = document.getElementById('Pi').value
    const Tf = document.getElementById('Tf').value
    const Ti = document.getElementById('Ti').value
    const res = document.querySelector('.res')
    if(Pf == '' && Pi == '' && Tf == '' && Ti == '') {
        res.innerHTML = 'Adicione Valores'
        return;
    }
        const deltas = Pf - Pi
        const deltat = Tf - Ti
        res.innerHTML = `
        Δs = ${deltas}
        Δt = ${deltat}
        `      
}
function resolveVelocidadeMedia(){
    const deltaS = document.getElementById('vde').value
    const deltaT = document.getElementById('vdt').value
    const res = document.querySelector('.res1')
    if(deltaS.length == 0 && deltaT.length == 0) {
        res.innerHTML = 'Adicione Valores'
        return;
    }
        const vm = deltaS / deltaT
        res.innerHTML = `
        Δs = ${deltaS} <br>
        Δt = ${deltaT} <br>
        Vm = ${deltaS} / ${deltaT} <br>
        vm = ${vm} <br>
        `
}
function resolveEquationGrau2() {
    const a = document.getElementById('a').value
    const b = document.getElementById('b').value
    const c = document.getElementById('c').value
    const res = document.querySelector('.res2')
    if(a.length == 0 && b.length == 0 && c.length == 0) {
        res.innerHTML = 'Adicione Valores'
        return;
    }
        const delta = Math.pow(b,2) - (4 * a * c)
        const x1 = ((b * -1) + Math.sqrt(delta)) / (2 * a)
        const x2 = ((b * -1) - Math.sqrt(delta)) / (2 * a)
        const xv = -b / 2 * a
        const yv = -delta / 4 * a
    res.innerHTML = `
    Δ = ${b}*${b} – 4*${a}*${c} <br>
    Valor de Δ= ${delta} <br>
    Valor de Xv= ${xv} <br>
    Valor de Yv= ${yv} <br>
    Valor de X1= ${x1} <br>
    Valor de X2= ${x2}
    `
}
    function resolvePitagoras() {
        const c1 = document.getElementById('c1').value
        const c2 = document.getElementById('c2').value
        const res = document.querySelector('.res3')
        if(c1.length == 0 && c2.length == 0) {
            res.innerHTML = 'Adicione Valores'
            return;
        }
            const sc = Math.pow(c1,2) + Math.pow(c2,2)
            const h = Math.sqrt(sc)
            res.innerHTML = `
            Valor da Hipotenusa é= ${h}
            `     
    }
    function resolveGrausC() {
        const gc = document.getElementById('gc').value
        const res = document.querySelector('.res4')
        if(gc.length == 0) {
            res.innerHTML = 'Adicione Valores'
            return;
        }
            const conversionF = (gc * 9/5) + 32
            res.innerHTML = `
            Fahrenheit = ${conversionF}
            `
    }
    function resolveGrausF() {
        const gf = document.getElementById('gf').value
        const res = document.querySelector('.res5')
        if(gf.length == 0) {
            res.innerHTML = 'Adicione Valores'
            return;
        }
            const conversionC = (gf - 32) * 5/9
            res.innerHTML = `
            Celsius = ${conversionC}
            `
    }
  
