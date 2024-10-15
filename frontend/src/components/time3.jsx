import { useEffect, useState } from "react"


export default function TimeSlot() {
    const [slot, setSlot] = useState([])
    const getTime = async () => {

        setSlot([])

        let today = new Date()

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(currentDate.getDate() + i);
            let endDate = new Date(today)
            endDate.setDate(endDate.getDate() + i)
            endDate.setHours(21, 0, 0, 0)
            if (today.getDate() === currentDate.getDate()) {
                if (currentDate.getHours() >= 10) {
                    currentDate.setHours(currentDate.getHours() + 1)
                }
                else {
                    currentDate.setHours(10)
                }
                currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0)
            }
            else{
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlot = []
            while(currentDate < endDate){
                let formattedTime = currentDate.toLocaleTimeString([] , {hour:"2-digit" , minute:"2-digit"})
                timeSlot.push({
                    time:formattedTime,
                    dateTime:new Date(currentDate)
                })
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }
            setSlot(prev => ([...prev , timeSlot]))
        }

    }
    useEffect(() => {
        getTime()
     
    }, [])
    useEffect(() => {
        console.log(slot)
    },[slot])
    return (
        <div>
<h1>Hello</h1>
        </div>
    )
}