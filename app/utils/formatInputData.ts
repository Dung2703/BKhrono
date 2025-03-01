const formattingInput = (data: string) => {
    const courses: string[] = data.split('Lịch đăng ký')
    courses.shift()
    courses.forEach((course, index) => {
        if (course.includes('ĐĂNG KÝ MÔN HỌC')) {
            const indexOfKeyword = course.indexOf('ĐĂNG KÝ MÔN HỌC')
            course = course.slice(0, indexOfKeyword)
        }
        let i = course.indexOf('Chọn môn học đăng ký')
        course = course.slice(i)
        i = course.indexOf('Phiếu đăng ký')
        courses[index] = course.slice(0, i)
    })
    
    return courses
}

export const getClassesList = (data: string) => {
    const finalClasses: string[] = []
    const courses: string[] = formattingInput(data)
    courses.forEach((course) => {
        const index = course.indexOf('Chọn môn học đăng ký')
        const subject = course.slice(index + 21, index + 27)
        const splitData = course.split('Sĩ số LT	#\n')
        const data: string = splitData[1] || ''
        const str: string = data
        if (course.includes('_')) {
            
        }
        else {
            const regex = /CC\d{2}/g
            const matches = [...str.matchAll(regex)]
            const classes = matches.filter((_, i) => i % 2 == 0)
            classes.forEach((subclass, i) => {
                finalClasses.push(getClassNonLab(subclass, i, classes, subject))
            })
        }
    })
    
    return finalClasses
}

const getClassNonLab = (subclass: RegExpMatchArray, index: number, classes: RegExpMatchArray[], subject: string) => {
    let temp : string
    const inputStr = subclass.input || ''
    const indexStart = subclass.index || 0
    if (index == classes.length - 1) {
        const indexOfCN = inputStr.indexOf('CN', indexStart)
        const indexOfDT = inputStr.indexOf('DT', indexStart)
        const indexOfDTQ = inputStr.indexOf('DTQ', indexStart)
        const indexOfL = inputStr.indexOf('L', indexStart)
        const indexOfTN = inputStr.indexOf('TN', indexStart)

        const endIndex =
            indexOfCN != -1 ? indexOfCN :
            indexOfDT != -1 ? indexOfDT :
            indexOfDTQ != -1 ? indexOfDTQ :
            indexOfL != -1 ? indexOfL :
            indexOfTN != -1 ? indexOfTN :
            inputStr.length

        temp = inputStr.slice(indexStart, endIndex)
    }
    else {
        const nextMatch = classes[index + 1]
        const nextIndexStart = nextMatch && nextMatch.index != undefined ? nextMatch.index : inputStr.length
        const length = nextIndexStart - indexStart;
        temp = inputStr.slice(indexStart, indexStart + length)
    }
    const groupClass = subclass[0]
    temp = temp.slice(5)
    let numberStudent
    if (temp.slice(0, 5).includes(' ')) {
        numberStudent = temp.slice(0, 4)
        temp = temp.slice(58)
    }
    else {
        numberStudent = temp.slice(0, 5)
        temp = temp.slice(59)
    }
    const day = temp.slice(0, 1)
    temp = temp.slice(2)
    let time = '['
    let learningTime = ''
    const indexOfA = temp.indexOf('A')
    const indexOfB = temp.indexOf('B')
    const indexOfC = temp.indexOf('C')
    if (indexOfA != -1) {
        learningTime = temp.slice(0, indexOfA - 1)
        temp = temp.slice(indexOfA)
    }
    else if (indexOfB != -1) {
        learningTime = temp.slice(0, indexOfB - 1)
        temp = temp.slice(indexOfB)
    }   
    else if (indexOfC != -1) {
        learningTime = temp.slice(0, indexOfC - 1)
        temp = temp.slice(indexOfC)
    }
    const numbers = learningTime.split(' ').filter(num => num != '-').map(Number)
    const result = [numbers[0], numbers[numbers.length - 1]]
    time += result.toString() + ']'
    const indexOfDash = temp.indexOf('-')
    const room = temp.slice(0, indexOfDash + 4)
    return subject + ' ' + groupClass + ' ' + numberStudent + ' ' + day + ' ' + time + ' ' + room
}

// const getClassLab = (course: string) => {

// }