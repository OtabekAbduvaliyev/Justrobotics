import React, { useState } from 'react'
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'
import contactRobot from '../assets/robot-hero.png'
import SuccessModal from './Modals/SuccessModal'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    age: '',
    branch: 'ц4'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('998')) {
      value = value.slice(3);
    }
    if (value.length > 9) {
      value = value.slice(0, 9);
    }
    setFormData({
      ...formData,
      phone: value
    });
  };
  const handleBranchSelect = (branch) => {
    setFormData({
      ...formData,
      branch
    });
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!formData.phone || formData.phone.length < 9) newErrors.phone = 'Введите правильный номер';
    if (!formData.course) newErrors.course = 'Выберите курс';
    if (!formData.age) newErrors.age = 'Введите возраст';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const data = {
        ...formData,
      };
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(data)) {
        params.append(key, value);
      }
      await fetch(
        'https://script.google.com/macros/s/AKfycbyIoUZ8usP_Cjd3KcJJaaK8VtMSDhwRewBsMif63yQnsLuH1rWfgpMKAjhW-3KeNYMPSw/exec?' + params.toString(),
        {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      setFormData({ name: '', phone: '', course: '', age: '', branch: 'ц4' });
      setShowSuccessModal(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Произошла ошибка при отправке формы.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="bg-black py-3 sm:py-6 px-2 sm:px-4" id='contact'> 
      <div className="max-w-[1200px] mx-auto 2xl:max-w-[1400px] min-h-[600px] bg-[#111111] rounded-[30px] relative overflow-hidden">
        {}
        <div className="absolute bottom-0 right-0 w-full sm:w-[500px] h-[250px] sm:h-[420px] bg-gradient-to-tl from-yellow/50 via-yellow/20 to-transparent rounded-tl-full z-0"></div>
        <div className="flex flex-col sm:flex-row relative z-10 p-6 sm:p-8 gap-8">
          {}
          <div className="w-full sm:w-[60%]">
            <h1 className="text-yellow text-4xl sm:text-5xl font-bold mb-8">
              ПОЛУЧИТЕ БЕСПЛАТНЫЙ<br />ПЕРВЫЙ УРОК
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-white/10 text-white rounded-xl px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-yellow/30'
                    } focus:border-yellow outline-none w-full`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="901234567"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`bg-white/10 text-white rounded-xl px-4 py-3 border ${
                      errors.phone ? 'border-red-500' : 'border-yellow/30'
                    } focus:border-yellow outline-none w-full`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className={`bg-white/10 text-white rounded-xl px-4 py-3 border ${
                      errors.course ? 'border-red-500' : 'border-yellow/30'
                    } focus:border-yellow outline-none cursor-pointer 
                    [&>option]:bg-[#111111] [&>option]:text-white`}
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 215, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1em"
                    }}
                  >
                    <option value="" disabled>Выберете курс</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="ai">AI & Machine Learning</option>
                  </select>
                  {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
                </div>
                <div>
                  <input
                    type="number"
                    name="age"
                    placeholder="Возраст"
                    value={formData.age}
                    onChange={handleChange}
                    className={`bg-white/10 text-white rounded-xl px-4 py-3 border ${
                      errors.age ? 'border-red-500' : 'border-yellow/30'
                    } focus:border-yellow outline-none w-full`}
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <button 
                  type="button" 
                  onClick={() => handleBranchSelect('ц4')}
                  className={`${formData.branch === 'ц4' ? 'bg-yellow text-black' : 'bg-white/10 text-yellow border border-yellow'} px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all`}
                >
                  ФИЛИАЛ Ц4
                </button>
                <button 
                  type="button"
                  onClick={() => handleBranchSelect('беруни')}
                  className={`${formData.branch === 'беруни' ? 'bg-yellow text-black' : 'bg-white/10 text-yellow border border-yellow'} px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all`}
                >
                  ФИЛИАЛ БЕРУНИ
                </button>
              </div>
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-yellow text-black px-12 py-3 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ОТПРАВКА...' : 'ПОЛУЧИТЬ'}
              </button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-white">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow text-xl" />
                Адрес Орьентир
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-yellow text-xl" />
                График работы
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow text-xl" />
                Номера телефонов
              </div>
            </div>
          </div>
          {}
          <div className="w-full sm:w-[40%] flex items-center justify-center">
            <img 
              src={contactRobot} 
              alt="Robot" 
              className="h-[300px] sm:h-[400px] object-contain"
            />
          </div>
        </div>
        {}
        <div className="absolute top-0 right-0 w-full sm:w-1/1 h-full opacity-5">
          <div className="absolute w-full h-full bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:14px_14px]"></div>
        </div>
      </div>
      {}
      <div className="max-w-[1200px] mx-auto 2xl:max-w-[1400px] mt-8 rounded-[30px] overflow-hidden h-[400px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1561800.8992688057!2d65.51668579375!3d40.1335426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2971f2ccc0147%3A0xbd396bb4b67daabc!2sJizzax%20xokimiyat!5e0!3m2!1sen!2s!4v1747070347355!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[30px]"
        />
      </div>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  )
}
export default Contact