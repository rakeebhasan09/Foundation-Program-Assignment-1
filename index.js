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
