import * as React from 'react';
import styles from '../../styles/Contact.module.css';

const ContactForm = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      if (!res.ok) {
        const text = await res.text();
        let errMsg = text;
        try {
          const json = JSON.parse(text);
          errMsg = json.error || text;
        } catch {}
        throw new Error(errMsg || 'Bir hata oluştu');
      }

      await res.json();
      setStatus('success');
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  // Mesajı 5 saniye sonra sıfırlamak için useEffect
  React.useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setErrorMsg('');
      }, 5000); // 5000ms = 5 saniye

      return () => clearTimeout(timer); // cleanup
    }
  }, [status]);

  return (
    <div className={styles.contactContainer} ref={ref}>
      <h1 className={styles.title}>İletişim</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.nameRow}>
          <input
            type="text"
            placeholder="Adınız"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Soyadınız"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mesajınız"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
        </button>
        {status === 'success' && (
          <p className={styles.successMsg}>Mesajınız başarıyla gönderildi!</p>
        )}
        {status === 'error' && <p className={styles.errorMsg}>{errorMsg}</p>}
      </form>
    </div>
  );
});

export default ContactForm;
