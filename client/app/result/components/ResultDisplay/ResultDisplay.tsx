import React from "react";
import styles from "./ResultDisplay.module.css";

interface ScheduleCell {
  subject: string; // Subject name
  classID: string; // Class ID
  rowIndex: number; // Row index (time slot)
  colIndex: number; // Column index (day of the week)
  rowSpan: number; // Number of rows the cell spans (time slots)
}

const ResultDisplay: React.FC = () => {
  const scheduleData: ScheduleCell[] = [
    { subject: "HDH", classID:"CC02_CC03", rowIndex: 0, colIndex: 3, rowSpan: 5 },
    { subject: "HDH", classID:"CC02_CC03", rowIndex: 3, colIndex: 4, rowSpan: 2 },
    { subject: "XSTK", classID:"CC01", rowIndex: 6, colIndex: 1, rowSpan: 3 }, 
    { subject: "LTNC", classID:"CC02", rowIndex: 6, colIndex: 4, rowSpan: 2 },
    { subject: "KN", classID:"CC04", rowIndex: 7, colIndex: 0, rowSpan: 2 },
    { subject: "KTCT", classID:"CC05", rowIndex: 9, colIndex: 0, rowSpan: 2 },
  ];

  // Array to track remaining row spans for each column
  const colSpanTracker: number[] = Array(7).fill(0);

  const rows: React.JSX.Element[] = [];

  for (let rowIndex = 0; rowIndex < 11; rowIndex++) {
    const cells: React.JSX.Element[] = [];
    let currentColumn = 0;

    // Adjust `colSpanTracker` for the current row
    for (let i = 0; i < colSpanTracker.length; i++) {
      if (colSpanTracker[i] > 0) {
        colSpanTracker[i]--; // Reduce the remaining rowSpan for this column
      }
    }

    scheduleData.forEach((cell) => {
      if (cell.rowIndex === rowIndex) {
        // Fill empty cells up to the current cell's column index
        while (currentColumn < cell.colIndex || colSpanTracker[currentColumn] > 0) {
          if (colSpanTracker[currentColumn] > 0) {
            colSpanTracker[currentColumn]--; // Skip the cell with active rowSpan
          } else {
            cells.push(
              <td
                style={{ backgroundColor: "white" }}
                key={`empty-${rowIndex}-${currentColumn}`}
              />
            );
          }
          currentColumn++;
        }

        // Add the cell at the specified column
        cells.push(
          <td
            key={`${rowIndex}-${cell.colIndex}`}
            rowSpan={cell.rowSpan}
            className={styles.cell}
          >
            {cell.subject} <br /> {cell.classID}
          </td>
        );

        // Track the rowSpan for this column
        if (cell.rowSpan > 1) {
          colSpanTracker[currentColumn] = cell.rowSpan - 1; // Subtract 1 because this row is already rendered
        }

        currentColumn++; // Move to the next column
      }
    });

    // Fill the remaining empty cells in the row
    while (currentColumn < colSpanTracker.length) {
      if (colSpanTracker[currentColumn] > 0) {
        currentColumn++;
        continue;
      }
      cells.push(
        <td
          style={{ backgroundColor: "white" }}
          key={`empty-${rowIndex}-${currentColumn}`}
        />
      );
      currentColumn++;
    }

    rows.push(
      <tr key={rowIndex}>
        <th className={styles.time}>{rowIndex + 2}</th>
        {cells}
      </tr>
    );
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.day} ${styles.corner}`}>Tiết</th>
            <th className={styles.day}>T2</th>
            <th className={styles.day}>T3</th>
            <th className={styles.day}>T4</th>
            <th className={styles.day}>T5</th>
            <th className={styles.day}>T6</th>
            <th className={styles.day}>T7</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default ResultDisplay;