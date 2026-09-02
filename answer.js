function describeValue(value) {
    if (value) {
        return `${typeof value} | truthy`;
    } else {
        return `${typeof value} | falsy`;
    }
}

function getDayType(day) {
    switch (day) {
        case "Friday":
        case "Saturday":
            return "Weekend";

        case "Sunday":
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare = fare * 1.2;
    }

    return fare;
}

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
