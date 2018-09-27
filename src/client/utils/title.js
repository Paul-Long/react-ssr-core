export default function () {
  if (this.props.title) {
    window.document.title = this.props.title;
  }
}