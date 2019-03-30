import {act} from "../boilerplate";


const dataset = JSON.parse("[{\"birthday\": \"1997-10-03T00:00:00\", \"job\": \"programmer\", \"id\": 10, \"weight\": 84, \"name\": \"John Jokovich\", \"drink\": \"champaigne\", \"iq\": 142, \"sex\": \"male\"}, {\"birthday\": \"1990-02-13T00:00:00\", \"job\": \"model\", \"id\": 20, \"weight\": 100, \"name\": \"Bart Ferrari\", \"drink\": \"beer\", \"iq\": 158, \"sex\": \"male\"}, {\"birthday\": \"1993-11-19T00:00:00\", \"job\": \"programmer\", \"id\": 30, \"weight\": 55, \"name\": \"Jasmin Benz\", \"drink\": \"liquor\", \"iq\": 165, \"sex\": \"female\"}, {\"birthday\": \"1994-10-30T00:00:00\", \"job\": \"admin\", \"id\": 40, \"weight\": 51, \"name\": \"Anjelina Bugatti\", \"drink\": \"coke\", \"iq\": 130, \"sex\": \"female\"}, {\"birthday\": \"1989-05-18T00:00:00\", \"job\": \"specialist\", \"id\": 50, \"weight\": 112, \"name\": \"Vasya Korleone\", \"drink\": \"champaigne\", \"iq\": 106, \"sex\": \"male\"}, {\"birthday\": \"1988-09-11T00:00:00\", \"job\": \"undertaker\", \"id\": 60, \"weight\": 68, \"name\": \"Anjelina Trump\", \"drink\": \"vine\", \"iq\": 131, \"sex\": \"female\"}, {\"birthday\": \"1984-05-08T00:00:00\", \"job\": \"analyst\", \"id\": 70, \"weight\": 69, \"name\": \"Anjelina Borteo\", \"drink\": \"liquor\", \"iq\": 144, \"sex\": \"female\"}, {\"birthday\": \"1991-08-10T00:00:00\", \"job\": \"driver\", \"id\": 80, \"weight\": 65, \"name\": \"Jessica Jokovich\", \"drink\": \"coke\", \"iq\": 173, \"sex\": \"female\"}, {\"birthday\": \"1983-03-19T00:00:00\", \"job\": \"analyst\", \"id\": 90, \"weight\": 84, \"name\": \"Vasya Kovalski\", \"drink\": \"coke\", \"iq\": 199, \"sex\": \"male\"}, {\"birthday\": \"1988-07-27T00:00:00\", \"job\": \"specialist\", \"id\": 100, \"weight\": 69, \"name\": \"Feliks Busa\", \"drink\": \"beer\", \"iq\": 169, \"sex\": \"male\"}, {\"birthday\": \"1985-09-25T00:00:00\", \"job\": \"admin\", \"id\": 110, \"weight\": 118, \"name\": \"Dima Moneo\", \"drink\": \"water\", \"iq\": 156, \"sex\": \"male\"}, {\"birthday\": \"1993-10-05T00:00:00\", \"job\": \"researcher\", \"id\": 120, \"weight\": 70, \"name\": \"Helene Tusa\", \"drink\": \"vodka\", \"iq\": 148, \"sex\": \"female\"}, {\"birthday\": \"1981-02-03T00:00:00\", \"job\": \"researcher\", \"id\": 130, \"weight\": 52, \"name\": \"Tanya Bronze\", \"drink\": \"vine\", \"iq\": 198, \"sex\": \"female\"}, {\"birthday\": \"1986-03-06T00:00:00\", \"job\": \"researcher\", \"id\": 140, \"weight\": 95, \"name\": \"Dima Benz\", \"drink\": \"vine\", \"iq\": 186, \"sex\": \"male\"}, {\"birthday\": \"1995-03-03T00:00:00\", \"job\": \"driver\", \"id\": 150, \"weight\": 63, \"name\": \"Iren Smith\", \"drink\": \"milk\", \"iq\": 195, \"sex\": \"female\"}, {\"birthday\": \"1985-08-30T00:00:00\", \"job\": \"programmer\", \"id\": 160, \"weight\": 65, \"name\": \"Anna Borteo\", \"drink\": \"champaigne\", \"iq\": 110, \"sex\": \"female\"}, {\"birthday\": \"1984-07-05T00:00:00\", \"job\": \"driver\", \"id\": 170, \"weight\": 60, \"name\": \"Jessica Macron\", \"drink\": \"cofee\", \"iq\": 181, \"sex\": \"female\"}, {\"birthday\": \"1989-04-03T00:00:00\", \"job\": \"programmer\", \"id\": 180, \"weight\": 92, \"name\": \"Feliks Borteo\", \"drink\": \"vodka\", \"iq\": 156, \"sex\": \"male\"}, {\"birthday\": \"1990-04-18T00:00:00\", \"job\": \"admin\", \"id\": 190, \"weight\": 75, \"name\": \"Jack Smith\", \"drink\": \"champaigne\", \"iq\": 166, \"sex\": \"male\"}, {\"birthday\": \"1998-02-06T00:00:00\", \"job\": \"admin\", \"id\": 200, \"weight\": 91, \"name\": \"Nick Sarkozi\", \"drink\": \"champaigne\", \"iq\": 109, \"sex\": \"male\"}, {\"birthday\": \"1997-05-21T00:00:00\", \"job\": \"undertaker\", \"id\": 210, \"weight\": 120, \"name\": \"Feliks Sarkozi\", \"drink\": \"beer\", \"iq\": 120, \"sex\": \"male\"}, {\"birthday\": \"1980-09-15T00:00:00\", \"job\": \"undertaker\", \"id\": 220, \"weight\": 109, \"name\": \"Philipp Korleone\", \"drink\": \"cofee\", \"iq\": 156, \"sex\": \"male\"}, {\"birthday\": \"1992-06-05T00:00:00\", \"job\": \"specialist\", \"id\": 230, \"weight\": 71, \"name\": \"Ivanka Boorman\", \"drink\": \"tea\", \"iq\": 197, \"sex\": \"female\"}, {\"birthday\": \"1989-10-19T00:00:00\", \"job\": \"researcher\", \"id\": 240, \"weight\": 84, \"name\": \"Feliks Ferrari\", \"drink\": \"vine\", \"iq\": 147, \"sex\": \"male\"}, {\"birthday\": \"1981-08-09T00:00:00\", \"job\": \"specialist\", \"id\": 250, \"weight\": 80, \"name\": \"Dima Milfovich\", \"drink\": \"tea\", \"iq\": 133, \"sex\": \"male\"}, {\"birthday\": \"1996-07-06T00:00:00\", \"job\": \"economist\", \"id\": 260, \"weight\": 123, \"name\": \"Denis Trump\", \"drink\": \"coke\", \"iq\": 102, \"sex\": \"male\"}, {\"birthday\": \"1997-07-09T00:00:00\", \"job\": \"driver\", \"id\": 270, \"weight\": 69, \"name\": \"Petya Ferrari\", \"drink\": \"coke\", \"iq\": 177, \"sex\": \"male\"}, {\"birthday\": \"1998-02-08T00:00:00\", \"job\": \"model\", \"id\": 280, \"weight\": 79, \"name\": \"Denis Kovalski\", \"drink\": \"beer\", \"iq\": 128, \"sex\": \"male\"}, {\"birthday\": \"1982-11-04T00:00:00\", \"job\": \"driver\", \"id\": 290, \"weight\": 48, \"name\": \"Anjelina Kovalski\", \"drink\": \"vine\", \"iq\": 129, \"sex\": \"female\"}, {\"birthday\": \"1987-02-10T00:00:00\", \"job\": \"specialist\", \"id\": 300, \"weight\": 74, \"name\": \"Jack Smith\", \"drink\": \"vine\", \"iq\": 139, \"sex\": \"male\"}, {\"birthday\": \"1983-01-04T00:00:00\", \"job\": \"economist\", \"id\": 310, \"weight\": 63, \"name\": \"Anna Kirman\", \"drink\": \"champaigne\", \"iq\": 136, \"sex\": \"female\"}, {\"birthday\": \"1985-07-09T00:00:00\", \"job\": \"model\", \"id\": 320, \"weight\": 58, \"name\": \"Anna Kovalski\", \"drink\": \"tea\", \"iq\": 124, \"sex\": \"female\"}, {\"birthday\": \"1985-07-21T00:00:00\", \"job\": \"model\", \"id\": 330, \"weight\": 55, \"name\": \"Iren Milfovich\", \"drink\": \"champaigne\", \"iq\": 132, \"sex\": \"female\"}, {\"birthday\": \"1992-04-23T00:00:00\", \"job\": \"programmer\", \"id\": 340, \"weight\": 49, \"name\": \"Helene Trump\", \"drink\": \"liquor\", \"iq\": 137, \"sex\": \"female\"}, {\"birthday\": \"1995-02-10T00:00:00\", \"job\": \"specialist\", \"id\": 350, \"weight\": 66, \"name\": \"Sasha Smith\", \"drink\": \"champaigne\", \"iq\": 137, \"sex\": \"female\"}, {\"birthday\": \"1992-09-28T00:00:00\", \"job\": \"analyst\", \"id\": 360, \"weight\": 69, \"name\": \"Michael Trump\", \"drink\": \"milk\", \"iq\": 156, \"sex\": \"male\"}, {\"birthday\": \"1989-03-06T00:00:00\", \"job\": \"researcher\", \"id\": 370, \"weight\": 109, \"name\": \"Denis Bugatti\", \"drink\": \"champaigne\", \"iq\": 128, \"sex\": \"male\"}, {\"birthday\": \"1987-06-10T00:00:00\", \"job\": \"admin\", \"id\": 380, \"weight\": 94, \"name\": \"John Sarkozi\", \"drink\": \"vine\", \"iq\": 161, \"sex\": \"male\"}, {\"birthday\": \"1985-03-15T00:00:00\", \"job\": \"admin\", \"id\": 390, \"weight\": 48, \"name\": \"Anna Tusa\", \"drink\": \"water\", \"iq\": 135, \"sex\": \"female\"}, {\"birthday\": \"1982-09-06T00:00:00\", \"job\": \"undertaker\", \"id\": 400, \"weight\": 71, \"name\": \"Feliks Trump\", \"drink\": \"vine\", \"iq\": 196, \"sex\": \"male\"}, {\"birthday\": \"1988-01-16T00:00:00\", \"job\": \"model\", \"id\": 410, \"weight\": 58, \"name\": \"Anna Tusa\", \"drink\": \"liquor\", \"iq\": 164, \"sex\": \"female\"}, {\"birthday\": \"1998-08-17T00:00:00\", \"job\": \"researcher\", \"id\": 420, \"weight\": 53, \"name\": \"Ivanka Kovalski\", \"drink\": \"vine\", \"iq\": 137, \"sex\": \"female\"}, {\"birthday\": \"1981-05-10T00:00:00\", \"job\": \"model\", \"id\": 430, \"weight\": 61, \"name\": \"Sasha Kovalski\", \"drink\": \"cofee\", \"iq\": 178, \"sex\": \"female\"}, {\"birthday\": \"1987-07-18T00:00:00\", \"job\": \"programmer\", \"id\": 440, \"weight\": 50, \"name\": \"Jasmin Sarkozi\", \"drink\": \"water\", \"iq\": 142, \"sex\": \"female\"}, {\"birthday\": \"1986-01-14T00:00:00\", \"job\": \"researcher\", \"id\": 450, \"weight\": 109, \"name\": \"Denis Borteo\", \"drink\": \"vodka\", \"iq\": 113, \"sex\": \"male\"}, {\"birthday\": \"1993-08-03T00:00:00\", \"job\": \"undertaker\", \"id\": 460, \"weight\": 82, \"name\": \"Feliks Tusa\", \"drink\": \"coke\", \"iq\": 147, \"sex\": \"male\"}, {\"birthday\": \"1988-05-15T00:00:00\", \"job\": \"model\", \"id\": 470, \"weight\": 70, \"name\": \"Tanya Kirman\", \"drink\": \"vodka\", \"iq\": 100, \"sex\": \"female\"}, {\"birthday\": \"1990-12-16T00:00:00\", \"job\": \"researcher\", \"id\": 480, \"weight\": 70, \"name\": \"Sveta Bronze\", \"drink\": \"tea\", \"iq\": 112, \"sex\": \"female\"}, {\"birthday\": \"1998-07-20T00:00:00\", \"job\": \"driver\", \"id\": 490, \"weight\": 96, \"name\": \"Petya Bronze\", \"drink\": \"milk\", \"iq\": 176, \"sex\": \"male\"}, {\"birthday\": \"1992-05-26T00:00:00\", \"job\": \"researcher\", \"id\": 500, \"weight\": 62, \"name\": \"Iren Kovalski\", \"drink\": \"liquor\", \"iq\": 127, \"sex\": \"female\"}]")
dataset.forEach(it => it.birthday = new Date(it.birthday))

const Tps = {
    str: 'str',
    int: 'int',
    dt: 'dt',
}


const schema = [
    {nm: 'birthday', tp: Tps.dt},
    {nm: 'id', tp: Tps.int},
    {nm: 'job', tp: Tps.str},
    {nm: 'weight', tp: Tps.int},
    {nm: 'iq', tp: Tps.int},
    {nm: 'name', tp: Tps.str},
    {nm: 'drink', tp: Tps.str},
    {nm: 'sex', tp: Tps.str},
]

const fetchData = async () => Promise.resolve({dataset, schema})

const loadAndPrepareAllStuff = async () => {
    const data = await fetchData() // Типа мы её зафетчили откуда то

    const stringFields = data.schema.filter(it => it.tp == Tps.str).map(it => it.nm)

    const fieldValues = data.dataset.reduce((accumulator, currentItem) => {
        stringFields.forEach(fld => {

            if (!(fld in accumulator))
                accumulator[fld] = []

            const arr = accumulator[fld]

            const val = currentItem[fld]

            if (!arr.includes(val))
                arr.push(val)
        })
        return accumulator
    }, {})

    act('initial_component_state')
        .set(['src'], data)
        .set(['src', 'fieldVals'], fieldValues)
        .dispatch()
}


export {loadAndPrepareAllStuff, Tps}



