import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AddContactForm, Filter } from '../components/Forms';
import ContactList from '../components/ContactList/ContactList';
import Section from '../components/Section/Section';
import { getFilter } from '../redux/phonebook/filterSelector';
import { useFetchContactsQuery } from '../redux/phonebook/phonebookAPI';

function ContactPage() {
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  const filteredContacts = useMemo(() => {
    const normaliezedFilter = filter.toLowerCase();
    if (!data) {
      return;
    }
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normaliezedFilter),
    );
  }, [data, filter]);

  return (
    <div className="container">
      <Section>
        <AddContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {data && <ContactList contacts={filteredContacts} />}
      </Section>
    </div>
  );
}

export default ContactPage;
