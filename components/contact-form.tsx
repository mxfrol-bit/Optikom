'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const choices = [
  'Интраокулярные линзы',
  'Stellaris Elite™ — оборудование',
  'Масла и растворы',
  'Хирургические наборы',
  'Сервис и обслуживание',
  'Другое',
];
export function ContactForm({
  initialInterest = 'Интраокулярные линзы',
}: {
  initialInterest?: string;
}) {
  const options = choices.includes(initialInterest)
    ? choices
    : [initialInterest, ...choices];
  const [topic, setTopic] = useState<string>(initialInterest);
  const [prepared, setPrepared] = useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = `Здравствуйте!\n\nИнтересует: ${topic}\nИмя: ${data.get('name')}\nДолжность: ${data.get('role')}\nКлиника: ${data.get('clinic')}\nТелефон: ${data.get('phone')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
        window.location.href = `mailto:info@optikom.pro?subject=${encodeURIComponent('Запрос в Оптиком: ' + topic)}&body=${encodeURIComponent(body)}`;
        setPrepared(true);
      }}
    >
      <span className="section-label">РАССКАЖИТЕ О ВАШЕЙ ЗАДАЧЕ</span>
      <h2>Начнём знакомство.</h2>
      <div className="form-grid">
        <label>
          Ваше имя <span>*</span>
          <Input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Как к вам обращаться"
          />
        </label>
        <label>
          Клиника / организация <span>*</span>
          <Input
            name="clinic"
            autoComplete="organization"
            required
            maxLength={200}
            placeholder="Название клиники"
          />
        </label>
        <label>
          Телефон <span>*</span>
          <Input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            minLength={7}
            maxLength={30}
            placeholder="+7 (___) ___-__-__"
          />
        </label>
        <label>
          Email
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@clinic.ru"
          />
        </label>
        <label className="full-width">
          Должность
          <Input
            name="role"
            autoComplete="organization-title"
            placeholder="Ваша должность"
          />
        </label>
        <div className="full-width">
          <label id="topic-label">Что вас интересует?</label>
          <Select value={topic} onValueChange={(v) => v && setTopic(v)}>
            <SelectTrigger
              aria-labelledby="topic-label"
              className="topic-select"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {options.map((x) => (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <label className="full-width">
          Сообщение
          <Textarea
            name="message"
            maxLength={3000}
            rows={3}
            placeholder="Что нужно вашей клинике?"
          />
        </label>
      </div>
      <button className="button primary" type="submit">
        Подготовить письмо <ArrowUpRight size={18} />
      </button>
      <p className="form-note">
        Откроется ваша почтовая программа с заполненным письмом на
        info@optikom.pro. Отправку вы подтверждаете в ней.
      </p>
      {prepared && (
        <p className="form-feedback" role="status">
          Письмо подготовлено. Если почтовая программа не открылась, напишите на{' '}
          <a href="mailto:info@optikom.pro">info@optikom.pro</a> или позвоните:{' '}
          <a href="tel:+78312140067">+7 (831) 214-00-67</a>.
        </p>
      )}
    </form>
  );
}
