const CheckBox = ({ checked, onChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    style={{ width: '24px', height: '24px', accentColor: '#ec4899' }}
  />
)

export default CheckBox