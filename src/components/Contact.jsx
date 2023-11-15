import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import ContactForm from './common/form/ContactForm'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateID = import.meta.env.VITE_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY
    const email = import.meta.env.EMAIL

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: email,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false)
          alert(
            'Thank you for reaching out. I will get back to you as soon as possible.'
          )

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert('Sorry, something went wrong. Please try again.')
        }
      )
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse xl:gap-0 gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <ContactForm
          formRef={formRef}
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
