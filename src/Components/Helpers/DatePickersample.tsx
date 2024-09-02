// import React, {FC, useEffect, useState} from 'react'
// import DatePicker, {registerLocale} from 'react-datepicker'
// import moment from 'moment'
// import de from 'date-fns/locale/de' // the locale you want
 
// // custom
// import 'react-datepicker/dist/react-datepicker.css'
// import './DateTimePicker.scss'
// // import {string} from 'yup'
 
 
// interface Props {
//   selectedDate: Date | undefined
//   onDateChange: (date: Date) => void
//   onBlur?: () => void
//   type?: string
//   disabledRes?: boolean
//   onCalendarClose?: (onSelectedDate: Date | undefined) => any
//   minDate?: Date
//   minTime?: Date
//   maxDate?: Date
//   maxTime?: Date
//   hideTimeSelect?: boolean
//   noMinDate?: boolean
//   hidePlaceholder?: boolean
//   placeholder?: string
//   showYearDropdown?: boolean
//   showMonthDropdown?: boolean
// }
 
// const DateTimePicker: FC<Props> = ({
//   selectedDate,
//   onDateChange,
//   onBlur,
//   type,
//   disabledRes,
//   onCalendarClose,
//   minDate,
//   minTime,
//   maxDate,
//   maxTime,
//   hideTimeSelect,
//   noMinDate,
//   hidePlaceholder,
//   placeholder,
//   showMonthDropdown,
//   showYearDropdown,
// }) => {
//   const intl = useIntl()
//   const local = useLang()
 
//   // state
//   const [localSelectedDate, setLocalSelectedDate] = useState<Date>()
 
//   // effects
//   useEffect(() => {
//     if (localSelectedDate) {
//       onDateChange(localSelectedDate)
//     }
//   }, [localSelectedDate])
 
//   // const today = moment().toDate()
 
//   const filterPassedTime = (time) => {
//     const bool = moment(time).isAfter(moment(), 'second')
//     return bool
//   }
 
//   const filterTimepublish = (time) => {
//     const bool = moment(time).isBefore(moment(), 'second')
//     return bool
//   }
 
//   return (
//     <div>
//       <DatePicker
//         locale={local === 'de' ? 'de' : 'en'}
//         minDate={
//           minDate
//             ? moment(minDate).toDate()
//             : type === ('regEndDate' || 'regStartDate' || 'startDate' || 'endDate')
//               ? moment().toDate()
//               : type === 'Publish' || noMinDate
//                 ? undefined
//                 : moment().toDate()
//         }
//         minTime={
//           minTime
//             ? moment(minTime).toDate()
//             : selectedDate
//               ? moment(selectedDate).isSame(moment().startOf('day'), 'day')
//                 ? moment().toDate()
//                 : moment().startOf('day').toDate()
//               : undefined
//         }
//         maxDate={
//           type === 'Publish' ? moment().toDate() : maxDate ? moment(maxDate).toDate() : undefined
//         }
//         maxTime={
//           maxTime
//             ? moment(maxTime).toDate()
//             : selectedDate
//               ? moment().endOf('day').toDate()
//               : undefined
//         }
//         // filterTime={
//         //   type === 'Publish'
//         //     ? filterTimepublish
//         //     : type === ('regEndDate' || 'regStartDate' || 'startDate' || 'endDate')
//         //     ? undefined
//         //     : filterPassedTime
//         // }
//         selected={selectedDate}
//         onChange={(date: Date) => {
//           setLocalSelectedDate(date)
//         }}
//         placeholderText={
//           hidePlaceholder
//             ? ''
//             : intl.formatMessage({
//                 id: placeholder ? placeholder : 'DATE_PICKER_PLACEHOLDER',
//               })
//         }
//         className='form-control  form-control-solid'
//         dateFormat={
//           local === 'de'
//             ? `dd.MM.yyyy${hideTimeSelect ? '' : ' HH:mm'}`
//             : `yyyy-MM-dd${hideTimeSelect ? '' : ' HH:mm'}`
//         }
//         showTimeSelect={!hideTimeSelect}
//         timeFormat='HH:mm'
//         clearButtonTitle={'x'}
//         dayClassName={(day) => {
//           return 'fs-6 rdp-day'
//         }}
//         shouldCloseOnSelect={true}
//         disabledKeyboardNavigation
//         renderDayContents={(day) => {
//           return (
//             <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
//               {day}
//             </div>
//           )
//         }}
//         onCalendarClose={() => {
//           onCalendarClose?.(localSelectedDate)
//         }}
//         onClickOutside={() => {
//           onBlur?.()
//         }}
//         disabled={disabledRes}
//         showMonthDropdown={showMonthDropdown}
//         showYearDropdown={showYearDropdown}
//         dropdownMode='select'
//       />
//     </div>
//   )
// }
 
 
// export default DateTimePicker