import { Class } from "./types";

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
			// Extract all subclasses from str (e.g., CC01_CC02, CC02_CC03)
			const subclassMatches = str.match(/CC\d{2}_CC\d{2}/g) || [];

			subclassMatches.forEach((subclass) => {

				// Isolate the part of str specific to this subclass
				const subclassStartIndex = str.indexOf(subclass);
				const regex = /CC|DT|DTQ|L|CN|TN/g; // Match any of the keywords
				const searchArea = str.slice(subclassStartIndex + 59, subclassStartIndex + 59+ 235); // Narrow the search area

				const match = searchArea.match(regex);

				let subclassEndIndex = match ? str.indexOf(match[0], subclassStartIndex + 59) : str.length;


				const subclassStr = str.slice(subclassStartIndex, subclassEndIndex);
				// Process this subclass with getClassLab
				finalClasses.push(getClassLab(subclassStr, subject));
			});
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
	return finalClasses;
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
    const indexOfTab = temp.indexOf('\t')
    const numberStudent = temp.slice(0, indexOfTab)
    temp = temp.slice(indexOfTab + 54)
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

const getClassLab = (subclassStr: string, subject: string): string => {
	// Extract the main and lab class codes
	const matchResult = subclassStr.match(/CC\d{2}_CC\d{2}/);
	const [mainClass, labClass] = matchResult?.[0].split("_") ?? ["Unknown", "Unknown"];

	// Extract the entire "40/40" string for student count
	const studentsMatch = subclassStr.match(/\d{1,3}\/\d{1,3}/);
	const studentsString = studentsMatch ? studentsMatch[0] : "Unknown";

	// Match time blocks, days, and rooms
	const timeBlocks = subclassStr.match(/Thứ \d+\s+[-\d\s]+/g) || ["nah"];

	const days = subclassStr.match(/Thứ (\d+)/g) || [];
	const rooms = subclassStr.match(/[A-Z]\d-\d+/g) || [];

	// default set up: main is above and lab is below => [0: 'main', 1:'lab']
	let swap = 1;

	// Determine the main and lab classes based on time durations
	if (timeBlocks[0].split(" ").filter((x) => x !== "-").length < timeBlocks[1].split(" ").filter((x) => x !== "-").length) 
	{

		swap = 0;
	}

	// Parse main class details
	const mainDay = days[swap? 1:0]?.split(" ")[1] || "Unknown";
	const mainTimes = timeBlocks[swap? 1:0]?.split(" ").filter((x) => x !== "-").map(Number) || [];
	const mainTimeRange = mainTimes.length? `[${mainTimes[2]},${mainTimes[mainTimes.length - 2]}]`: "Unknown";
	const mainRoom = rooms[swap? 1:0] || "Unknown";

	// Parse lab class details
	const labDay = days[swap? 0:1]?.split(" ")[1] || "Unknown";
	const labTimes = timeBlocks[swap? 0:1]?.split(" ").filter((x) => x !== "-").map(Number) || [];
	const labTimeRange = labTimes.length? `[${labTimes[2]},${labTimes[labTimes.length - 2]}]`: "Unknown";
	const labRoom = rooms[swap? 0:1] || "Unknown";

	// Return formatted string
	return `${subject} ${mainClass} ${studentsString} ${mainDay} ${mainTimeRange} ${mainRoom} ${labClass} ${labDay} ${labTimeRange} ${labRoom}`;
};


export const parseClassString = (classStr: string): Class[] => {
	const parts = classStr.split(" ");
	if (parts.length === 6) {
		// Non-lab class format
		const [course_id, classCode, students, day, time, room] = parts;
		const [current_quantity, max_quantity] = students.split("/").map(Number);
		const date = parseInt(day.replace("Thứ", ""), 10);
		const timeRange = time.slice(1, -1).split(",").map(Number);

		return [
			{
				type: "non-lab",
				course_id,
				class: classCode,
				current_quantity,
				max_quantity,
				date,
				time: timeRange,
				room,
			},
		];
	} else if (parts.length === 10) {
		// Lab class format
		const [
			course_id,
			classCode,
			students,
			mainDay,
			mainTime,
			room,
			class_lab,
			labDay,
			labTime,
			room_lab,
		] = parts;
		const [currentStudents, maxStudents] = students.split("/").map(Number);
		const mainDayNumber = parseInt(mainDay.replace("Thứ", ""), 10);
		const mainTimeRange = mainTime.slice(1, -1).split(",").map(Number);
		const labDayNumber = parseInt(labDay.replace("Thứ", ""), 10);
		const labTimeRange = labTime.slice(1, -1).split(",").map(Number);

		return [
			{
				type: "lab",
				course_id,
				class: classCode,
				current_quantity: currentStudents,
				max_quantity: maxStudents,
				date: mainDayNumber,
				time: mainTimeRange,
				room,
				class_lab,
				date_lab: labDayNumber,
				time_lab: labTimeRange,
				room_lab,
			},
		];
	}
	return []; // Return an empty array for unexpected formats
};

export const getClassesFromCourse = (course_id: string, classes: Class[]): Class[] => {
	return classes.filter((cls) => cls.course_id === course_id);
}

export const fillClasses = (schedule: string[][], classes: Class[]): void => {
	for (let cls of classes) {
		// Deep copy the schedule
		const temp_schedule = schedule.map(row => [...row]);

		const { type, course_id, class: classID, date, time, class_lab, date_lab, time_lab } = cls;
		const [start, end] = time;
		const [start_lab, end_lab] = time_lab || [0, 0];

		let isOccupied = false;

		const colIndex = date - 2;
		const colIndexLab = (date_lab || -1) - 2;

		console.log(cls);

		// Check conflicts for main class
		for (let i = start; i <= end; i++) {
			if (temp_schedule[i - 2][colIndex] !== "-1") {
				console.warn(`Conflict at ${i}, ${colIndex} for class ${course_id}`);
				isOccupied = true;
				break;
			}
		}

		// Check conflicts for lab class
		if (!isOccupied && type === "lab") {
			for (let i = start_lab; i <= end_lab; i++) {
				if (temp_schedule[i - 2][colIndexLab] !== "-1") {
					console.warn(`Conflict at ${i}, ${colIndexLab} for lab ${course_id}`);
					isOccupied = true;
					break;
				}
			}
		}

		if (!isOccupied) {
			// Fill main class
			for (let i = start; i <= end; i++) {
				temp_schedule[i - 2][colIndex] = (i === start) ? course_id : classID;
			}

			// Fill lab class
			if (type === "lab") {
				for (let i = start_lab; i <= end_lab; i++) {
					temp_schedule[i - 2][colIndexLab] = (i === start_lab) ? course_id : (class_lab || "");
				}
			}

			// Commit changes to the original schedule
			for (let i = 0; i < schedule.length; i++) {
				for (let j = 0; j < schedule[i].length; j++) {
					schedule[i][j] = temp_schedule[i][j];
				}
			}

			break;
		}
	}
};

