import React, { useState, useContext } from 'react'
import { addDoc, collection, getFirestore, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { CartContext } from './CartContext';
import { Form, Button, Modal } from 'react-bootstrap';
import './ContactForm.css'
import { TemaContext } from "./TemaContext";

export default function ContactForm(id) {
    const { darkTheme } = useContext(TemaContext);
    const { cart, clearCart, total } = useContext(CartContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [orderCode, setOrderCode] = useState('');
    const db = getFirestore();
    let newStock = 0;

    const order = {
        buyer: { name: name, phone: phone, email: email, address: address },
        items: cart,
        total: total,
        date: serverTimestamp()
    }
    const sendOrder = () => {
        const orderCollection = collection(db, 'Orders');
        addDoc(orderCollection, order).then(({ id }) => {
            setOrderCode(id);
            clearCart();
        })
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    cart.map(prod => {
        const stockUpdate = doc(db, 'Productos', prod.id)
        if (prod.stock > 0) {
            newStock = (prod.stock - prod.quantity)
        }
        updateDoc(stockUpdate, { stock: newStock })
        return (console.log(newStock))
    })

    const productosTotal = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <>
            <div className={`${darkTheme ? 'rouseDarkThemeRes' : 'rouseLightThemeRes'}`}>
                <h1>Resumen</h1>
                <div className={`${darkTheme ? 'rouseDarkThemeResNum' : 'rouseLightThemeResNum'}`}>
                    <h3>Cantidad de items: {productosTotal}</h3>
                </div>
                <div className={`${darkTheme ? 'rouseDarkThemeTotal' : 'rouseLightThemeTotal'}`}>
                    <h2>Total: ${total}</h2>
                </div>
            </div>
            <h1 className={`${darkTheme ? 'rouseDarkThemeCheck' : 'rouseLightThemeCheck'}`}>Completar</h1>
            <div className='form-style'>
                <Form onSubmit={(e) => { e.preventDefault(); sendOrder() }}>
                    <input type="text" value={name} name="nameForm" id="nameForm" placeholder="Apellido y Nombre"
                        onChange={(e) => setName(e.target.value)} required
                    />
                    <input type="text" value={email} name="emailForm" id="emailForm" placeholder='email@...'
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                    <input type="text" value={phone} name="phoneForm" id="phoneForm" placeholder='+54(0XX)XXX-XX-XX'
                        onChange={(e) => setPhone(e.target.value)} required
                    />
                    <input type="text" value={address} name="addressForm" id="addressForm" required placeholder='Avenida Papuli'
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {
                        cart.length === 0 ?
                            <Button variant="dark" disabled>Enviar</Button> :
                            <Button onClick={handleOpen} type="submit" variant="dark">Enviar</Button>
                    }
                </Form>
                {
                    orderCode === "" ? null :
                        <Modal
                            show={open}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    Modal heading
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h2>{name}</h2>
                                <h2>{email}</h2>
                                <h2>{phone}</h2>
                                <h2>{address}</h2>
                                <h2>{total}</h2>
                                <h2>{orderCode}</h2>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                }
            </div>
        </>
    )
}