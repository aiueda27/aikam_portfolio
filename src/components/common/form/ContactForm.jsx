import Input from './Input'
import Textarea from './Textarea'

const ContactForm = ({ formRef, form, onChange, onSubmit, loading }) => {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="mt-12 flex flex-col gap-8"
    >
      <Input
        label="Your Name"
        name="name"
        value={form.value}
        placeholder="Please enter your name"
        onChange={onChange}
      />
      <Input
        label="Your Email"
        type="email"
        name="email"
        value={form.email}
        placeholder="Please enter your email"
        onChange={onChange}
      />
      <Textarea
        label="Your Message"
        name="message"
        value={form.message}
        placeholder="Enter your message here"
        onChange={onChange}
      />
      <button
        type="submit"
        className="bg-tertiary px-8 py-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
    </form>
  )
}

export default ContactForm
