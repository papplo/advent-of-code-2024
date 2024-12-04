import { assert } from "console";

function primi (criteria) {
    let safeReports = 0;

    for (const report of criteria) {
        let reportIsIncreasing;
        let reportIsSafe;

        for (let index = 1; index < report.length; index++) {
            const level = report[index];
            const levelIncreased = level > report[index-1];

            if (index > 1 ) {
                reportIsSafe = (reportIsIncreasing === levelIncreased)
            } else {
                reportIsIncreasing = levelIncreased
            }
        }

        reportIsSafe && safeReports++
    }

    return safeReports
}

function deuce (criteria) {

}

export {
    primi,
    deuce
}