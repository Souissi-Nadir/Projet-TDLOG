/*
import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { trash, mail } from 'ionicons/icons';
import Papa from 'papaparse';
import { QRCodeCanvas } from 'qrcode.react';
import './Participants.css';

interface Participant {
  id: number;
  nom: string;
  prenom: string;
  promo: string;
  email: string;
  tarif: string;
  qrCode?: string;
}

let nextId = 1;

const Participants: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [form, setForm] = useState({ nom: '', prenom: '', promo: '', email: '', tarif: '' });

  // Ajouter manuellement
  const addParticipant = () => {
    if (!form.nom || !form.prenom) return;
    const newParticipant: Participant = { id: nextId++, ...form, qrCode: `${form.nom}-${Date.now()}` };
    setParticipants([...participants, newParticipant]);
    setForm({ nom: '', prenom: '', promo: '', email: '', tarif: '' });
  };

  // Supprimer
  const deleteParticipant = (id: number) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  // Import CSV
  const handleCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      Papa.parse(e.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (results: any) => {
          const imported: Participant[] = results.data.map((row: any) => ({
            id: nextId++,
            nom: row.nom,
            prenom: row.prenom,
            annee: row.promo,
            email: row.email,
            tarif: row.tarif,
            qrCode: `${row.nom}-${Date.now()}`
          }));
          setParticipants([...participants, ...imported]);
        }
      });
    }
  };

  // Envoyer mail (placeholder)
  const sendMail = (p: Participant) => {
    alert(`Mail envoyé à ${p.email} avec le QR code: ${p.qrCode}`);
  };

  // Mettre à jour inline
  const updateParticipant = (id: number, field: keyof Participant, value: string) => {
    setParticipants(participants.map(p => (p.id === id ? { ...p, [field]: value } : p)));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Participants</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Participants</IonTitle>
          </IonToolbar>
        </IonHeader>
      
        <IonList>
          <IonItem>
            <IonInput placeholder="Nom" value={form.nom} onIonChange={e => setForm({...form, nom: e.detail.value!})} />
            <IonInput placeholder="Prénom" value={form.prenom} onIonChange={e => setForm({...form, prenom: e.detail.value!})} />
            <IonInput placeholder="Promo" value={form.promo} onIonChange={e => setForm({...form, promo: e.detail.value!})} />
            <IonInput placeholder="Email" value={form.email} onIonChange={e => setForm({...form, email: e.detail.value!})} />
            <IonInput placeholder="Tarif" value={form.tarif} onIonChange={e => setForm({...form, tarif: e.detail.value!})} />
            <IonButton onClick={addParticipant}>Ajouter</IonButton>
          </IonItem>
        </IonList>

        <IonItem>
          <IonLabel>Importer CSV :</IonLabel>
          <input type="file" accept=".csv" onChange={handleCSV} />
        </IonItem>

        <IonGrid>
          <IonRow>
            <IonCol>Nom</IonCol>
            <IonCol>Prénom</IonCol>
            <IonCol>Promo</IonCol>
            <IonCol>Email</IonCol>
            <IonCol>Tarif</IonCol>
            <IonCol>QR</IonCol>
            <IonCol>Actions</IonCol>
          </IonRow>
          {participants.map(p => (
            <IonRow key={p.id}>
              <IonCol>
                <IonInput value={p.nom} onIonChange={e => updateParticipant(p.id, 'nom', e.detail.value!)} />
              </IonCol>
              <IonCol>
                <IonInput value={p.prenom} onIonChange={e => updateParticipant(p.id, 'prenom', e.detail.value!)} />
              </IonCol>
              <IonCol>
                <IonInput value={p.promo} onIonChange={e => updateParticipant(p.id, 'promo', e.detail.value!)} />
              </IonCol>
              <IonCol>
                <IonInput value={p.email} onIonChange={e => updateParticipant(p.id, 'email', e.detail.value!)} />
              </IonCol>
              <IonCol>
                <IonInput value={p.tarif} onIonChange={e => updateParticipant(p.id, 'tarif', e.detail.value!)} />
              </IonCol>
              <IonCol>
                <QRCodeCanvas value={p.qrCode!} size={64} />
              </IonCol>
              <IonCol>
                <IonButton color="danger" onClick={() => deleteParticipant(p.id)}>
                  <IonIcon icon={trash} />
                </IonButton>
                <IonButton color="primary" onClick={() => sendMail(p)}>
                  <IonIcon icon={mail} />
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Participants;
*/

import React, { useEffect, useMemo, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonText,
  useIonToast
} from '@ionic/react';
import { trash, mail, createOutline } from 'ionicons/icons';
import Papa from 'papaparse';
import { QRCodeCanvas } from 'qrcode.react';
import './Participants.css';

interface Participant {
  id: number;
  nom: string;
  prenom: string;
  promo: string;
  email: string;
  tarif: string;
  qrCode?: string;
}

let nextId = 1;

// -- Mock d’événements par asso (en attendant l’API) --
const eventsByAssociation: Record<string, string[]> = {
  'Association Alpha': ['Gala 2025', 'Afterwork Mars', 'Conférence IA'],
  'Beta Events': ['Soirée Caritative', 'Hackathon Étudiant'],
  'Gamma Group': ['Weekend Intégration', 'Forum Entreprises']
};

const getActiveAssociation = () =>
  localStorage.getItem('activeAssociation') || 'Association Alpha';

const Participants: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [form, setForm] = useState({ nom: '', prenom: '', promo: '', email: '', tarif: '' });
  const [present] = useIonToast();

  // Bandeau événement
  const [activeAssociation, setActiveAssociation] = useState<string>(getActiveAssociation());
  const availableEvents = useMemo(
    () => eventsByAssociation[activeAssociation] || [],
    [activeAssociation]
  );
  const [selectedEvent, setSelectedEvent] = useState<string>('');

  // Édition : ligne en cours d’édition (id) ou null
  const [editingId, setEditingId] = useState<number | null>(null);

  // Charger l’asso active depuis localStorage si elle change ailleurs
  useEffect(() => {
    const onStorage = () => setActiveAssociation(getActiveAssociation());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Sélectionner le 1er événement par défaut si vide
  useEffect(() => {
    if (!selectedEvent && availableEvents.length > 0) {
      setSelectedEvent(availableEvents[0]);
    }
  }, [availableEvents, selectedEvent]);

  // Ajouter manuellement
  const addParticipant = () => {
    if (!form.nom || !form.prenom) {
      present({ message: 'Nom et prénom sont requis.', duration: 1800, color: 'warning' });
      return;
    }
    const newParticipant: Participant = {
      id: nextId++,
      ...form,
      qrCode: `${form.nom}-${Date.now()}`
    };
    setParticipants(prev => [...prev, newParticipant]);
    setForm({ nom: '', prenom: '', promo: '', email: '', tarif: '' });
    present({ message: 'Participant ajouté', duration: 1200, color: 'success' });
  };

  // Supprimer
  const deleteParticipant = (id: number) => {
    setParticipants(prev => prev.filter(p => p.id !== id));
    if (editingId === id) setEditingId(null);
  };

  // Import CSV
  const handleCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      Papa.parse(e.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (results: Papa.ParseResult<Record<string, string>>) => {
          const imported: Participant[] = results.data
            .filter(row => row.nom && row.prenom) // simple filtrage
            .map(row => ({
              id: nextId++,
              nom: (row.nom || '').trim(),
              prenom: (row.prenom || '').trim(),
              promo: (row.promo || row.annee || '').trim(), // compat léger
              email: (row.email || '').trim(),
              tarif: (row.tarif || '').trim(),
              qrCode: `${row.nom}-${Date.now()}`
            }));
          setParticipants(prev => [...prev, ...imported]);
          // Reset input pour pouvoir réimporter le même fichier
          e.currentTarget.value = '';
          present({ message: `${imported.length} lignes importées`, duration: 1500, color: 'success' });
        }
      });
    }
  };

  // Envoyer mail (placeholder)
  const sendMail = (p: Participant) => {
    alert(`Mail envoyé à ${p.email} avec le QR code: ${p.qrCode}`);
  };

  // Mettre à jour inline (seulement si en édition)
  const updateParticipant = (id: number, field: keyof Participant, value: string) => {
    if (editingId !== id) return; // verrouillé tant que pas en mode édition
    setParticipants(prev => prev.map(p => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const startEdit = (id: number) => setEditingId(id);
  const stopEdit = () => setEditingId(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="participants-toolbar">
          <IonTitle>Participants</IonTitle>
          {/* Bandeau : Asso + Sélecteur d’événement */}
          <IonButtons slot="end" className="participants-toolbar-right">
            <IonItem lines="none" className="toolbar-selects">
              <IonLabel position="stacked" className="toolbar-label">Association</IonLabel>
              <IonSelect
                value={activeAssociation}
                onIonChange={e => {
                  const v = e.detail.value!;
                  setActiveAssociation(v);
                  localStorage.setItem('activeAssociation', v);
                }}
                interface="popover"
              >
                {Object.keys(eventsByAssociation).map(a => (
                  <IonSelectOption key={a} value={a}>{a}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>

            <IonItem lines="none" className="toolbar-selects">
              <IonLabel position="stacked" className="toolbar-label">Événement</IonLabel>
              <IonSelect
                value={selectedEvent}
                placeholder="Choisir un événement"
                interface="popover"
                onIonChange={e => setSelectedEvent(e.detail.value!)}
              >
                {availableEvents.map(ev => (
                  <IonSelectOption key={ev} value={ev}>{ev}</IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="participants-content">
        {/* Titre de la page / nom de l’événement */}
        <div className="event-title-wrap">
          <IonText color="dark">
            <h1 className="event-title">{selectedEvent || 'Sélectionnez un événement'}</h1>
          </IonText>
        </div>

        {/* Bloc 1 : Formulaire manuel */}
        <IonCard className="block-card">
          <IonCardHeader>
            <IonCardTitle>Ajout manuel</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList className="manual-form-list">
              <IonItem>
                <IonInput
                  label="Nom"
                  labelPlacement="floating"
                  placeholder="Nom"
                  value={form.nom}
                  onIonChange={e => setForm({ ...form, nom: e.detail.value || '' })}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  label="Prénom"
                  labelPlacement="floating"
                  placeholder="Prénom"
                  value={form.prenom}
                  onIonChange={e => setForm({ ...form, prenom: e.detail.value || '' })}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  label="Promo"
                  labelPlacement="floating"
                  placeholder="Promo"
                  value={form.promo}
                  onIonChange={e => setForm({ ...form, promo: e.detail.value || '' })}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  label="Email"
                  labelPlacement="floating"
                  placeholder="email@example.com"
                  type="email"
                  value={form.email}
                  onIonChange={e => setForm({ ...form, email: e.detail.value || '' })}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  label="Tarif"
                  labelPlacement="floating"
                  placeholder="€"
                  value={form.tarif}
                  onIonChange={e => setForm({ ...form, tarif: e.detail.value || '' })}
                />
              </IonItem>

              <div className="form-actions">
                <IonButton onClick={addParticipant}>Ajouter</IonButton>
              </div>
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* Bloc 2 : Import CSV */}
        <IonCard className="block-card">
          <IonCardHeader>
            <IonCardTitle>Importer depuis un CSV</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem lines="none">
              <IonLabel position="stacked">Fichier CSV</IonLabel>
              <input className="csv-input" type="file" accept=".csv" onChange={handleCSV} />
            </IonItem>
            <div className="csv-help">
              <IonText>
                <small>Entêtes attendues : <b>nom, prenom, promo, email, tarif</b></small>
              </IonText>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Bloc 3 : Tableau fusionné (import + manuel) */}
        <IonCard className="block-card">
          <IonCardHeader>
            <IonCardTitle>Liste des participants</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="table-wrapper">
              <IonGrid className="participants-table" fixed>
                <IonRow className="table-header">
                  <IonCol>Nom</IonCol>
                  <IonCol>Prénom</IonCol>
                  <IonCol>Promo</IonCol>
                  <IonCol>Email</IonCol>
                  <IonCol className="col-tarif">Tarif</IonCol>
                  <IonCol className="col-qr">QR</IonCol>
                  <IonCol className="col-actions">Actions</IonCol>
                </IonRow>

                {participants.map((p, idx) => {
                  const locked = editingId !== p.id; // true => lecture seule
                  return (
                    <IonRow key={p.id} className={idx % 2 ? 'table-row odd' : 'table-row'}>
                      <IonCol>
                        <IonInput
                          value={p.nom}
                          disabled={locked}
                          className={locked ? 'locked' : ''}
                          onIonChange={e => updateParticipant(p.id, 'nom', e.detail.value || '')}
                        />
                      </IonCol>
                      <IonCol>
                        <IonInput
                          value={p.prenom}
                          disabled={locked}
                          className={locked ? 'locked' : ''}
                          onIonChange={e => updateParticipant(p.id, 'prenom', e.detail.value || '')}
                        />
                      </IonCol>
                      <IonCol>
                        <IonInput
                          value={p.promo}
                          disabled={locked}
                          className={locked ? 'locked' : ''}
                          onIonChange={e => updateParticipant(p.id, 'promo', e.detail.value || '')}
                        />
                      </IonCol>
                      <IonCol>
                        <IonInput
                          value={p.email}
                          disabled={locked}
                          className={locked ? 'locked' : ''}
                          onIonChange={e => updateParticipant(p.id, 'email', e.detail.value || '')}
                        />
                      </IonCol>
                      <IonCol className="col-tarif">
                        <IonInput
                          value={p.tarif}
                          disabled={locked}
                          className={locked ? 'locked' : ''}
                          onIonChange={e => updateParticipant(p.id, 'tarif', e.detail.value || '')}
                        />
                      </IonCol>
                      <IonCol className="col-qr">
                        <div className="qr-wrap">
                          <QRCodeCanvas value={p.qrCode || `${p.nom}-${p.id}`} size={56} />
                        </div>
                      </IonCol>
                      <IonCol className="col-actions">
                        {locked ? (
                          <IonButton fill="clear" onClick={() => startEdit(p.id)} title="Modifier">
                            <IonIcon icon={createOutline} />
                          </IonButton>
                        ) : (
                          <IonButton fill="clear" color="medium" onClick={stopEdit} title="Terminer">
                            Terminer
                          </IonButton>
                        )}
                        <IonButton color="primary" fill="clear" onClick={() => sendMail(p)} title="Envoyer par mail">
                          <IonIcon icon={mail} />
                        </IonButton>
                        <IonButton color="danger" fill="clear" onClick={() => deleteParticipant(p.id)} title="Supprimer">
                          <IonIcon icon={trash} />
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  );
                })}
              </IonGrid>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Participants;

