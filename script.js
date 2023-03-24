let commentList = document.querySelector('.commentList')
let url = 'https://dummyjson.com/comments'

async function GetData(){
    let data = await fetch(url)
    let dataJson = await data.json()
    console.log(dataJson)
    let comments = dataJson.comments
    ShowCards(comments)
}
GetData()

function CreateComment(commentData){
    let card = document.createElement('div')
    card.classList.add('card')

    let userBlock = document.createElement('div')
    userBlock.classList.add('user')

    let body = document.createElement('div')
    body.classList.add('body')



    card.append(userBlock)
    card.append(body)

    let Uname = document.createElement('h1')
    Uname.classList.add('UnameText')
    Uname.textContent = commentData.user.username

    let bodyText = document.createElement('p')
    bodyText.classList.add('Pbody')
    bodyText.textContent = commentData.body

    userBlock.append(Uname)
    body.append(bodyText)
    

    return card
}

function ShowCards(comments){
    comments.forEach(function(element){
        let card  = CreateComment(element)
        commentList.append(card)
    })
}

console.log(Uname)