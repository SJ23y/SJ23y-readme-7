import { Entity, StorableEntity, Subscriber } from '@project/shared-core';

export class EmailSubscriberEntity extends Entity implements StorableEntity<Subscriber> {
  public email: string;
  public name: string;

  constructor(subscriber?: Subscriber) {
    super();

    this.populate(subscriber);
  }

  private populate(subscriber?: Subscriber) {
    if (subscriber) {
      this.email = subscriber.email;
      this.name = subscriber.name;
      this.id = subscriber.id ?? '';
    }
  }

  public toPOJO(): Subscriber {
    return {
      email: this.email,
      name: this.name,
      id: this.id
    }
  }

}