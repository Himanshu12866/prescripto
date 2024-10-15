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
                    currentDate.setHours(currentDate.getHours() + 30)
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
        }

    }
    useEffect(() => {
        getTime()
        console.log(slot)
    }, [])
    return (
        <div>

        </div>
    )
}