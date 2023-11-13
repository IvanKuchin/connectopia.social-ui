type participantObj = {
    Name: string
    Expire: number
}

async function fetchParticipants() : Promise<participantObj[]> {
    const result = await fetch("/api/v1/domains")
    const participants = await result.json()
    return participants
}


function main() : void {
    const participants = fetchParticipants()
    participants.then((participants) => {
        const list = document.getElementsByClassName("_participants")[0]
        if(!list) {
            console.warn("Element with id 'participants' not found")
            return
        }
        if(participants === null) {
            console.log("No participants found")
            return
        }
        participants.forEach((participant) => {
            const item = document.createElement("a")
            item.setAttribute("href", `https://${participant.Name}`)
            item.innerText = participant.Name
            list.appendChild(item)
        })
})
}

main()
