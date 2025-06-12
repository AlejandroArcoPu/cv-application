export default function formatDate(date) {
  if (date) {
    let formattedDate = new Date(date);
    let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      formattedDate
    );
    let month = new Intl.DateTimeFormat("en", { month: "short" }).format(
      formattedDate
    );
    return `${month} ${year}`;
  }
}
