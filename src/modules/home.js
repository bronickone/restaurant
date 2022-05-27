function home(){
    const home = document.createElement('div')
    const header = document.createElement('h1')
    const image = document.createElement('img')
    const para = document.createElement('p')
    para.classList.add('home-para')
    header.classList.add('home-head')
    
    header.textContent = 'DOTA BAR'
    

    para.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Ipsum hic porro nihil numquam, modi necessitatibus sit accusamus aliquid repellat illo non earum at sunt iusto! 
    Eligendi ipsam praesentium corporis perferendis!
`
    
    home.appendChild(header)
    home.appendChild(para)

    return home;
}

export default home;
